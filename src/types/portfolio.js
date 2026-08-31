export const INITIAL_PORTFOLIO_DATA = {
  profile: {
    name: "Alex 'Kaizen' Rivera",
    handle: "@kaizen.edits",
    title: "Senior Video Editor & Visual Storyteller",
    tagline: "Crafting High-Retention Reels, Cinematic Commercials & Viral YouTube Edits",
    bio: "Passionate video editor & motion artist with 5+ years of experience helping 7-figure creators and global brands scale audience retention and drive over 120M+ cumulative views. Specialized in fast-paced short-form storytelling, sound design, and color grading.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    location: "Los Angeles, CA & Remote Worldwide",
    availableForHire: true,
    experienceYears: "5+",
    viewsGenerated: "120M+",
    projectsCompleted: "450+",
    satisfactionRate: "99.4%",
    showreelUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-neon-lights-and-flying-cars-42998-large.mp4",
    showreelThumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    socials: {
      instagram: "https://instagram.com/kaizen.edits",
      instagramHandle: "kaizen.edits",
      youtube: "https://youtube.com/@kaizenedits",
      tiktok: "https://tiktok.com/@kaizen.edits",
      twitter: "https://x.com/kaizenedits",
      email: "contact@kaizenedits.com",
      whatsapp: "+1234567890",
      discord: "kaizen#0001"
    },
    softwareStack: [
      { name: "Premiere Pro", icon: "Pr", color: "#9999FF" },
      { name: "After Effects", icon: "Ae", color: "#9999FF" },
      { name: "DaVinci Resolve", icon: "Dv", color: "#FF8A65" },
      { name: "CapCut Pro", icon: "Cc", color: "#00F2FE" },
      { name: "Blender 3D", icon: "Bl", color: "#F57C00" },
      { name: "Photoshop", icon: "Ps", color: "#31A8FF" }
    ]
  },
  categories: [
    { id: "all", label: "All Projects", count: 8 },
    { id: "reels", label: "9:16 Vertical Reels", count: 4 },
    { id: "cinematic", label: "Cinematic & Ads", count: 3 },
    { id: "colorgrade", label: "Color Grading & VFX", count: 2 },
    { id: "youtube", label: "YouTube & Long-form", count: 2 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Cyberpunk Drift | High Octane Reel",
      category: "reels",
      aspectRatio: "9:16",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-drifting-on-a-racetrack-41712-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      client: "Redline Motors",
      duration: "0:24",
      views: "2.4M",
      software: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      description: "Fast-paced kinetic short-form edit with velocity pacing, bespoke sound design, custom 3D track-ins, and deep cinematic contrast.",
      featured: true,
      instagramPostUrl: "https://instagram.com/reel/C892348example1"
    },
    {
      id: "proj-2",
      title: "Apex Urban Apparel | Global Brand Launch",
      category: "cinematic",
      aspectRatio: "16:9",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-a-futuristic-outfit-41774-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      client: "Apex Streetwear",
      duration: "1:15",
      views: "850K",
      software: ["Premiere Pro", "DaVinci Resolve"],
      description: "Sleek, high-fashion commercial piece with seamless match cuts, film grain emulation, custom typography, and rhythmic audio design.",
      featured: true,
      instagramPostUrl: "https://instagram.com/reel/C892348example2"
    },
    {
      id: "proj-3",
      title: "The Art of Coffee | Micro-Documentary",
      category: "youtube",
      aspectRatio: "16:9",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-coffee-with-latte-art-41838-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      client: "Origins Roastery",
      duration: "3:45",
      views: "420K",
      software: ["Premiere Pro", "DaVinci Resolve"],
      description: "Deep narrative pacing with warm analog color grade, ambient Foley layers, and smooth B-roll transitions.",
      featured: false,
      instagramPostUrl: "https://instagram.com/reel/C892348example3"
    },
    {
      id: "proj-4",
      title: "Neon Pulse Fitness | Dynamic Workout Hook",
      category: "reels",
      aspectRatio: "9:16",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-athletic-woman-exercising-in-a-gym-with-neon-lights-42994-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      client: "Pulse Athletics",
      duration: "0:18",
      views: "3.8M",
      software: ["After Effects", "CapCut Pro"],
      description: "High-retention workout hook edit using sound-synced whip pans, speed ramps, and neon animated stroke highlights.",
      featured: true,
      instagramPostUrl: "https://instagram.com/reel/C892348example4"
    },
    {
      id: "proj-5",
      title: "Midnight Horizon | Tokyo Night Color Grade",
      category: "colorgrade",
      aspectRatio: "16:9",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tokyo-traffic-at-night-with-neon-signs-41843-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      client: "Sony Alpha Filmmakers",
      duration: "0:45",
      views: "610K",
      software: ["DaVinci Resolve Studio"],
      description: "Before & After color grading from flat S-Log3 RAW footage to rich Kodak 2383 film print emulation with teal & neon glow highlights.",
      featured: true,
      instagramPostUrl: "https://instagram.com/reel/C892348example5"
    },
    {
      id: "proj-6",
      title: "FinTech 2.0 | Kinetic Motion Explainer",
      category: "reels",
      aspectRatio: "9:16",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-42999-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      client: "NovaPay App",
      duration: "0:30",
      views: "1.9M",
      software: ["After Effects", "Premiere Pro"],
      description: "Viral financial tech hook with 3D floating UI mockups, punchy captions, dynamic zooms, and gamified sound design.",
      featured: false,
      instagramPostUrl: "https://instagram.com/reel/C892348example6"
    },
    {
      id: "proj-7",
      title: "Echoes of Norway | Aerial Landscape Reel",
      category: "reels",
      aspectRatio: "9:16",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-winding-mountain-road-41840-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      client: "Wanderlust Media",
      duration: "0:22",
      views: "5.1M",
      software: ["Premiere Pro", "DaVinci Resolve"],
      description: "Viral travel reel with hyper-smooth drone stabilization, immersive ambient forest audio, and atmospheric mist grading.",
      featured: true,
      instagramPostUrl: "https://instagram.com/reel/C892348example7"
    },
    {
      id: "proj-8",
      title: "100-Day Creator Challenge | YouTube Docu-Series",
      category: "youtube",
      aspectRatio: "16:9",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-sitting-at-his-desk-editing-a-video-41716-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      client: "Sam K. (2.1M Subs)",
      duration: "14:20",
      views: "1.4M",
      software: ["Premiere Pro", "After Effects"],
      description: "High-retention episodic YouTube edit featuring pattern interrupts, custom sound staging, motion graphic titles, and suspense storytelling.",
      featured: false,
      instagramPostUrl: "https://instagram.com/reel/C892348example8"
    }
  ],
  beforeAfterComparison: {
    title: "Cinematic Color Grade & VFX Breakdown",
    subtitle: "Drag the slider to compare uncorrected camera RAW log footage vs. our custom Hollywood Kodak Look.",
    beforeLabel: "RAW S-Log3 Uncut",
    afterLabel: "Graded & Mastered",
    beforeImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=60&sat=-100&con=-40",
    afterImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=90",
    details: [
      { label: "Camera Profile", value: "Sony FX3 · S-Gamut3.Cine / S-Log3" },
      { label: "Look LUT", value: "Custom Kaizen FilmStock 2383 D65" },
      { label: "VFX Passes", value: "Halation, Film Grain, Sky Replacement" },
      { label: "Grading Suite", value: "DaVinci Resolve Studio 19" }
    ]
  },
  instagramFeed: [
    {
      id: "ig-1",
      reelUrl: "https://instagram.com/reel/C892348example1",
      thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
      caption: "Velocity sync car edit on Premiere + AE 🔥 Rate this 1-10! #videoediting #aftereffects #speedramp",
      views: "2.4M",
      likes: "184K",
      comments: "1.2K"
    },
    {
      id: "ig-2",
      reelUrl: "https://instagram.com/reel/C892348example2",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
      caption: "Commercial fashion shoot for @apex. Dynamic transitions & sound design ⚡ #premierepro #filmmaking",
      views: "850K",
      likes: "62K",
      comments: "418"
    },
    {
      id: "ig-3",
      reelUrl: "https://instagram.com/reel/C892348example4",
      thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      caption: "High energy gym commercial reel! Retention went up 40% on this hook 🚀 #reelseditor #shortform",
      views: "3.8M",
      likes: "290K",
      comments: "2.4K"
    },
    {
      id: "ig-4",
      reelUrl: "https://instagram.com/reel/C892348example7",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      caption: "Norway aerials cinematic color grading breakdown. S-Log to final grade ✨ #davinciresolve #colorist",
      views: "5.1M",
      likes: "412K",
      comments: "3.8K"
    }
  ],
  services: [
    {
      id: "srv-1",
      name: "Viral Short-Form Suite",
      target: "For Creators, TikTokers & IG Influencers",
      price: "$350",
      period: "per bundle (5 Reels)",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Up to 60s per video (9:16 Vertical)",
        "Hook optimization & pacing analysis",
        "Dynamic animated captions & emojis",
        "Sound design, Foley & trending audio",
        "Fast 24-48h turnaround time",
        "2 Free revision rounds included"
      ]
    },
    {
      id: "srv-2",
      name: "Commercial & Brand Ads",
      target: "For E-Commerce, Startups & Agencies",
      price: "$850",
      period: "per project",
      highlight: false,
      badge: "High Conversion",
      features: [
        "16:9 & 9:16 Multi-format deliverables",
        "Motion graphics & 3D product callouts",
        "Color grading & skin tone beauty pass",
        "Licensed commercial music track",
        "Full storyboard consultation",
        "3 Free revision rounds"
      ]
    },
    {
      id: "srv-3",
      name: "Monthly Creator Retainer",
      target: "For Channels & Businesses scaling fast",
      price: "$2,200",
      period: "per month",
      highlight: false,
      badge: "VIP Dedicated",
      features: [
        "20 High-Retention Reels/Shorts OR 4 Long-form",
        "Dedicated priority queue & Slack channel",
        "Thumbnail design & Title brainstorming",
        "Weekly performance review & iterations",
        "Source files & project archive access",
        "Unlimited minor revisions"
      ]
    }
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Marcus Vance",
      role: "Founder, Apex Streetwear",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Kaizen completely transformed our brand campaign. The edit had so much rhythm and energy that our launch reel broke 1M views in 48 hours. Absolute master of visual pacing."
    },
    {
      id: "t-2",
      name: "Elena Rostova",
      role: "YouTuber (850K Subscribers)",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Finding an editor who understands retention and storytelling is nearly impossible. Alex is in a league of his own. Average watch time jumped from 42% to 68% after he started editing my videos."
    },
    {
      id: "t-3",
      name: "David Chen",
      role: "Creative Director, Hyperion Media",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content: "Flawless communication, delivered 2 days ahead of deadline, and the color grading on DaVinci was cinema-ready out of the box. Will be hiring for all our upcoming Q4 commercials."
    }
  ]
};
