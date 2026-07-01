import Tag from "../components/ui/tag";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-linear-to-r compression from-slate-950/90 to-slate-900/70 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
          <Tag>Beautiful Website</Tag>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6 font-fraunces">
            Architecting the Future of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">
              Digital Ecosystems
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Empower your enterprise with scalable, high-performance data
            infrastructures designed for next-level computing paradigms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-600/25">
              Launch Console
            </button>
            <button className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 px-8 py-4 rounded-xl font-bold text-base transition-all border border-slate-700 backdrop-blur-sm">
              Read Documentation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-400 flex flex-col items-center gap-2 text-xs tracking-widest animate-bounce">
          <span>SCROLL</span>
          <div className="w-1 h-4 bg-slate-400 rounded-full" />
        </div>
      </section>

      {/* Placeholder Content for Scrolling Verification */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Core Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-blue-500/10 rounded-xl mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Ultra-low Latency
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Sub-millisecond data distribution across edge nodes globally.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-blue-500/10 rounded-xl mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Immutable Security
            </h3>
            <p className="text-slate-600 leading-relaxed">
              End-to-end cryptographic verification protocols for every
              transaction.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-blue-500/10 rounded-xl mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Autonomous Scaling
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Dynamic resource allocation powered by predictive load models.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
