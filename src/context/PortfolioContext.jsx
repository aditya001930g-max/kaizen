import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PORTFOLIO_DATA } from '../types/portfolio';

const STORAGE_KEY = 'kaizen_video_portfolio_v1';

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load portfolio from localStorage', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null);
  const [toast, setToast] = useState(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio to localStorage', e);
    }
  }, [data]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev && prev.message === message ? null : prev));
    }, 3500);
  };

  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: 'proj-' + Date.now(),
      views: newProject.views || '0',
      duration: newProject.duration || '0:30',
      software: Array.isArray(newProject.software) ? newProject.software : (newProject.software ? newProject.software.split(',').map(s => s.trim()) : ['Premiere Pro']),
    };
    setData((prev) => ({
      ...prev,
      projects: [projectWithId, ...prev.projects],
    }));
    showToast(`"${projectWithId.title}" added to portfolio!`);
  };

  const updateProject = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, ...updatedFields } : proj
      ),
    }));
    showToast('Project updated successfully!');
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
    showToast('Project removed from portfolio');
  };

  const updateProfile = (profileUpdates) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profileUpdates },
    }));
    showToast('Profile settings updated!');
  };

  const addInstagramItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: 'ig-' + Date.now(),
      views: newItem.views || '100K',
      likes: newItem.likes || '10K',
      comments: newItem.comments || '150',
    };
    setData((prev) => ({
      ...prev,
      instagramFeed: [itemWithId, ...prev.instagramFeed],
    }));
    showToast('Instagram Reel added to showcase!');
  };

  const deleteInstagramItem = (id) => {
    setData((prev) => ({
      ...prev,
      instagramFeed: prev.instagramFeed.filter((item) => item.id !== id),
    }));
    showToast('Instagram item removed');
  };

  const updateBeforeAfter = (newData) => {
    setData((prev) => ({
      ...prev,
      beforeAfterComparison: { ...prev.beforeAfterComparison, ...newData },
    }));
    showToast('Before & After comparison updated!');
  };

  const resetToDemo = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Reset to original showcase data');
  };

  const exportPortfolioJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `${data.profile.handle.replace('@', '') || 'video-portfolio'}-backup.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Portfolio configuration exported as JSON!');
  };

  const importPortfolioJSON = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (importedData.profile && importedData.projects) {
          setData(importedData);
          showToast('Portfolio data successfully imported!');
        } else {
          showToast('Invalid portfolio JSON format', 'error');
        }
      } catch (err) {
        showToast('Error reading JSON file', 'error');
      }
    };
    reader.readAsText(file);
  };

  const openCinemaPlayer = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeCinemaPlayer = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openBooking = (packageName = null) => {
    setSelectedServiceForBooking(packageName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(null);
  };

  // Filtered projects
  const filteredProjects = data.projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' ? true : project.category === activeCategory;
    const matchesSearch =
      searchQuery === ''
        ? true
        : project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (project.software && project.software.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <PortfolioContext.Provider
      value={{
        data,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        filteredProjects,
        selectedProject,
        openCinemaPlayer,
        closeCinemaPlayer,
        isStudioOpen,
        openStudio: () => setIsStudioOpen(true),
        closeStudio: () => setIsStudioOpen(false),
        isShareOpen,
        openShare: () => setIsShareOpen(true),
        closeShare: () => setIsShareOpen(false),
        isBookingOpen,
        selectedServiceForBooking,
        openBooking,
        closeBooking,
        toast,
        showToast,
        addProject,
        updateProject,
        deleteProject,
        updateProfile,
        addInstagramItem,
        deleteInstagramItem,
        updateBeforeAfter,
        resetToDemo,
        exportPortfolioJSON,
        importPortfolioJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
