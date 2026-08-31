import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { VideoCard } from './VideoCard';
import { 
  Search, 
  Film, 
  Plus, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  Flame
} from 'lucide-react';

export const VideoGrid = () => {
  const { 
    data, 
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSearchQuery, 
    filteredProjects,
    openStudio 
  } = usePortfolio();

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Film className="w-4 h-4" />
              <span>Showcase Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
              Featured Edits & <span className="text-gradient-purple">Reels</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Browse through our selected portfolio of high-retention vertical reels, cinematic commercials, and color-graded films.
            </p>
          </div>

          {/* Quick Add Video CTA for the editor */}
          <button
            onClick={openStudio}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 text-xs font-semibold hover:text-white transition-all shadow-sm group"
          >
            <Plus className="w-4 h-4 text-purple-400 group-hover:rotate-90 transition-transform duration-300" />
            <span>Upload / Add Edit</span>
          </button>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 p-3 rounded-2xl glass-panel border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {data.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, title, software..."
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-input text-xs text-white placeholder-slate-500 focus:ring-1 focus:ring-purple-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Video Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
            {filteredProjects.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-2xl p-12 text-center border border-white/10 my-8">
            <Film className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              No videos matched your filter or search query. Try clearing the search or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
