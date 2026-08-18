export default function Background() {
  return (
    <div className="relative h-full w-full bg-slate-800 overflow-hidden">
      {/* Moving Ambient Glowing Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-600/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Subtle Grid Overlay for Tech Look */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}