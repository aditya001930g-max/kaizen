import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Plus, 
  UploadCloud, 
  Film, 
  User, 
  Download, 
  Upload, 
  Trash2, 
  Sparkles, 
  Save, 
  RotateCcw,
  CheckCircle2,
  Tv,
  Smartphone,
  Layers,
  Link,
  DollarSign
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const StudioModal = () => {
  const { 
    data, 
    isStudioOpen, 
    closeStudio, 
    addProject, 
    deleteProject, 
    updateProfile, 
    addInstagramItem, 
    deleteInstagramItem,
    resetToDemo, 
    exportPortfolioJSON, 
    importPortfolioJSON, 
    showToast 
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState('add-video');

  // New Video Form State
  const [videoForm, setVideoForm] = useState({
    title: '',
    client: '',
    category: 'reels',
    aspectRatio: '9:16',
    videoSourceType: 'url', // 'url' or 'file'
    videoUrl: '',
    thumbnail: '',
    duration: '0:30',
    views: '1.2M',
    software: 'Premiere Pro, After Effects',
    description: '',
    instagramPostUrl: '',
  });

  // New Instagram Item Form State
  const [igForm, setIgForm] = useState({
    reelUrl: '',
    thumbnail: '',
    caption: '',
    views: '1.5M',
    likes: '120K',
    comments: '850',
  });

  // Profile Form State
  const [profileForm, setProfileForm] = useState({ ...data.profile });

  if (!isStudioOpen) return null;

  // Handle Video File Upload
  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoForm((prev) => ({
        ...prev,
        videoUrl: url,
        title: prev.title || file.name.replace(/\.[^/.]+$/, ''),
      }));
      showToast(`Selected video: ${file.name}`);
    }
  };

  // Handle Thumbnail File Upload
  const handleThumbnailFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setVideoForm((prev) => ({
          ...prev,
          thumbnail: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVideoSubmit = (e) => {
    e.preventDefault();
    if (!videoForm.title) {
      showToast('Please provide a project title', 'error');
      return;
    }

    const defaultThumbs = {
      reels: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      cinematic: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      colorgrade: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      youtube: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    };

    const projectData = {
      title: videoForm.title,
      client: videoForm.client || 'Featured Client',
      category: videoForm.category,
      aspectRatio: videoForm.category === 'reels' ? '9:16' : videoForm.aspectRatio,
      videoUrl: videoForm.videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-drifting-on-a-racetrack-41712-large.mp4',
      thumbnail: videoForm.thumbnail || defaultThumbs[videoForm.category] || defaultThumbs.reels,
      duration: videoForm.duration || '0:30',
      views: videoForm.views || '500K',
      software: typeof videoForm.software === 'string' ? videoForm.software.split(',').map((s) => s.trim()) : videoForm.software,
      description: videoForm.description || 'High-retention edit with motion design and color grade.',
      instagramPostUrl: videoForm.instagramPostUrl || '',
    };

    addProject(projectData);
    setVideoForm({
      title: '',
      client: '',
      category: 'reels',
      aspectRatio: '9:16',
      videoSourceType: 'url',
      videoUrl: '',
      thumbnail: '',
      duration: '0:30',
      views: '1.2M',
      software: 'Premiere Pro, After Effects',
      description: '',
      instagramPostUrl: '',
    });
    setActiveTab('manage-videos');
  };

  const handleAddInstagramSubmit = (e) => {
    e.preventDefault();
    if (!igForm.reelUrl) {
      showToast('Please provide an Instagram Reel link', 'error');
      return;
    }

    addInstagramItem({
      reelUrl: igForm.reelUrl,
      thumbnail: igForm.thumbnail || 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
      caption: igForm.caption || 'New edit breakdown! 🔥 #videoediting #premierepro',
      views: igForm.views || '1.2M',
      likes: igForm.likes || '95K',
      comments: igForm.comments || '620',
    });

    setIgForm({
      reelUrl: '',
      thumbnail: '',
      caption: '',
      views: '1.5M',
      likes: '120K',
      comments: '850',
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0d0f17] border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Studio Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/50 text-purple-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <span>Creator Studio</span>
                <span className="px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30 text-[10px] uppercase font-mono">
                  Live Editor
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Upload edits, add Instagram links, and manage your portfolio
              </p>
            </div>
          </div>

          <button
            onClick={closeStudio}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-white/[0.02] border-b border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('add-video')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'add-video'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Upload / Add Video</span>
          </button>

          <button
            onClick={() => setActiveTab('manage-videos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'manage-videos'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Manage Videos ({data.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'instagram'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram Feed ({data.instagramFeed.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'profile'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Socials</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'backup'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export & Backup</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* TAB 1: ADD VIDEO */}
          {activeTab === 'add-video' && (
            <form onSubmit={handleAddVideoSubmit} className="space-y-6 max-w-3xl mx-auto">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project / Edit Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={videoForm.title}
                    onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                    placeholder="e.g. Cyberpunk Drift Reel"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Client / Creator Name
                  </label>
                  <input
                    type="text"
                    value={videoForm.client}
                    onChange={(e) => setVideoForm({ ...videoForm, client: e.target.value })}
                    placeholder="e.g. Redline Motors or @username"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Category
                  </label>
                  <select
                    value={videoForm.category}
                    onChange={(e) => setVideoForm({ ...videoForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white bg-[#0d0f17]"
                  >
                    <option value="reels">9:16 Vertical Reel</option>
                    <option value="cinematic">Cinematic & Commercial (16:9)</option>
                    <option value="colorgrade">Color Grading & VFX</option>
                    <option value="youtube">YouTube Long-Form</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Views Metric
                  </label>
                  <input
                    type="text"
                    value={videoForm.views}
                    onChange={(e) => setVideoForm({ ...videoForm, views: e.target.value })}
                    placeholder="e.g. 2.4M or 850K"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={videoForm.duration}
                    onChange={(e) => setVideoForm({ ...videoForm, duration: e.target.value })}
                    placeholder="e.g. 0:24 or 1:15"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              {/* Video Source Choice (Upload File vs Direct Link) */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-200">Video Source</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setVideoForm({ ...videoForm, videoSourceType: 'file' })}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        videoForm.videoSourceType === 'file'
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      Upload Video File
                    </button>
                    <button
                      type="button"
                      onClick={() => setVideoForm({ ...videoForm, videoSourceType: 'url' })}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        videoForm.videoSourceType === 'url'
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      Video URL / YouTube / Stream
                    </button>
                  </div>
                </div>

                {videoForm.videoSourceType === 'file' ? (
                  <label className="border-2 border-dashed border-purple-500/40 hover:border-purple-400 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all bg-purple-950/10">
                    <UploadCloud className="w-8 h-8 text-purple-400 mb-2" />
                    <span className="text-xs font-bold text-white">Click to browse MP4, WebM, MOV video</span>
                    <span className="text-[11px] text-slate-400 mt-1">Direct playback in browser</span>
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg,video/quicktime"
                      onChange={handleVideoFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <input
                    type="url"
                    value={videoForm.videoUrl}
                    onChange={(e) => setVideoForm({ ...videoForm, videoUrl: e.target.value })}
                    placeholder="https://... direct .mp4 link or YouTube / Vimeo link"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                )}
              </div>

              {/* Thumbnail Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Cover Thumbnail URL / Upload
                  </label>
                  <input
                    type="text"
                    value={videoForm.thumbnail}
                    onChange={(e) => setVideoForm({ ...videoForm, thumbnail: e.target.value })}
                    placeholder="https://images.unsplash.com/... or paste image URL"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white mb-2"
                  />
                  <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-purple-400" />
                    <span>Upload thumbnail image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Attached Instagram Reel Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={videoForm.instagramPostUrl}
                    onChange={(e) => setVideoForm({ ...videoForm, instagramPostUrl: e.target.value })}
                    placeholder="https://instagram.com/reel/..."
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              {/* Software & Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Software Used (Comma separated)
                </label>
                <input
                  type="text"
                  value={videoForm.software}
                  onChange={(e) => setVideoForm({ ...videoForm, software: e.target.value })}
                  placeholder="Premiere Pro, After Effects, DaVinci Resolve, Blender"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Description / Storytelling Notes
                </label>
                <textarea
                  rows={2}
                  value={videoForm.description}
                  onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                  placeholder="Briefly describe the pacing, sound design, hook, or visual effects used..."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Video to Showcase</span>
              </button>
            </form>
          )}

          {/* TAB 2: MANAGE VIDEOS */}
          {activeTab === 'manage-videos' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">
                  {data.projects.length} Total Projects in Portfolio
                </span>
                <button
                  onClick={() => setActiveTab('add-video')}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-medium flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Edit</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-2xl glass-panel border border-white/10 flex items-center gap-3 justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-purple-400 block">
                          {proj.category} · {proj.duration}
                        </span>
                        <h4 className="text-xs font-bold text-white truncate">
                          {proj.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 truncate block">
                          {proj.client} · {proj.views} views
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all shrink-0"
                      title="Delete Video"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSTAGRAM FEED */}
          {activeTab === 'instagram' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              {/* Add IG Form */}
              <form onSubmit={handleAddInstagramSubmit} className="p-4 rounded-2xl glass-panel border border-pink-500/30 space-y-4">
                <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4" />
                  <span>Add New Instagram Reel Link</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Reel / Post URL *</label>
                    <input
                      type="url"
                      required
                      value={igForm.reelUrl}
                      onChange={(e) => setIgForm({ ...igForm, reelUrl: e.target.value })}
                      placeholder="https://instagram.com/reel/..."
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Cover Image URL</label>
                    <input
                      type="url"
                      value={igForm.thumbnail}
                      onChange={(e) => setIgForm({ ...igForm, thumbnail: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Caption / Hashtags</label>
                  <input
                    type="text"
                    value={igForm.caption}
                    onChange={(e) => setIgForm({ ...igForm, caption: e.target.value })}
                    placeholder="e.g. Velocity sync edit breakdown 🔥 #videoediting"
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Views</label>
                    <input
                      type="text"
                      value={igForm.views}
                      onChange={(e) => setIgForm({ ...igForm, views: e.target.value })}
                      placeholder="1.5M"
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Likes</label>
                    <input
                      type="text"
                      value={igForm.likes}
                      onChange={(e) => setIgForm({ ...igForm, likes: e.target.value })}
                      placeholder="120K"
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Comments</label>
                    <input
                      type="text"
                      value={igForm.comments}
                      onChange={(e) => setIgForm({ ...igForm, comments: e.target.value })}
                      placeholder="850"
                      className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all"
                >
                  Add Reel to Instagram Section
                </button>
              </form>

              {/* Current Instagram List */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-300 block">
                  Current Instagram Reels ({data.instagramFeed.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.instagramFeed.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.thumbnail}
                          alt="Instagram Thumbnail"
                          className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs text-white font-medium truncate">
                            {item.caption}
                          </p>
                          <span className="text-[11px] text-pink-400 font-mono">
                            {item.views} Views · {item.likes} Likes
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteInstagramItem(item.id)}
                        className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROFILE & SOCIALS */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-5 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Display Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Handle / Brand Tag</label>
                  <input
                    type="text"
                    value={profileForm.handle}
                    onChange={(e) => setProfileForm({ ...profileForm, handle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Tagline</label>
                <input
                  type="text"
                  value={profileForm.tagline}
                  onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Bio</label>
                <textarea
                  rows={3}
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Instagram URL</label>
                  <input
                    type="url"
                    value={profileForm.socials?.instagram || ''}
                    onChange={(e) => setProfileForm({
                      ...profileForm,
                      socials: { ...profileForm.socials, instagram: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Instagram Handle</label>
                  <input
                    type="text"
                    value={profileForm.socials?.instagramHandle || ''}
                    onChange={(e) => setProfileForm({
                      ...profileForm,
                      socials: { ...profileForm.socials, instagramHandle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={profileForm.socials?.email || ''}
                    onChange={(e) => setProfileForm({
                      ...profileForm,
                      socials: { ...profileForm.socials, email: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={profileForm.socials?.whatsapp || ''}
                    onChange={(e) => setProfileForm({
                      ...profileForm,
                      socials: { ...profileForm.socials, whatsapp: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Views</label>
                  <input
                    type="text"
                    value={profileForm.viewsGenerated}
                    onChange={(e) => setProfileForm({ ...profileForm, viewsGenerated: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Edits Count</label>
                  <input
                    type="text"
                    value={profileForm.projectsCompleted}
                    onChange={(e) => setProfileForm({ ...profileForm, projectsCompleted: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Experience</label>
                  <input
                    type="text"
                    value={profileForm.experienceYears}
                    onChange={(e) => setProfileForm({ ...profileForm, experienceYears: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Rating</label>
                  <input
                    type="text"
                    value={profileForm.satisfactionRate}
                    onChange={(e) => setProfileForm({ ...profileForm, satisfactionRate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>
          )}

          {/* TAB 5: EXPORT & BACKUP */}
          {activeTab === 'backup' && (
            <div className="space-y-6 max-w-2xl mx-auto text-center">
              <div className="p-6 rounded-3xl glass-panel border border-white/10">
                <Download className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1 font-display">
                  Export Portfolio Data
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Download a complete backup JSON file containing all your video projects, Instagram links, bio, and settings.
                </p>
                <button
                  onClick={exportPortfolioJSON}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  Download Portfolio JSON
                </button>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-white/10">
                <Upload className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1 font-display">
                  Import Portfolio Data
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Load a previously exported portfolio JSON backup file.
                </p>
                <label className="inline-block px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-lg transition-all cursor-pointer">
                  <span>Select JSON File</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        importPortfolioJSON(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    if (window.confirm('Reset portfolio to original demo showcase?')) {
                      resetToDemo();
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold transition-all flex items-center gap-1.5 mx-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Demo Data</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
