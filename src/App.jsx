import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";
import YouTubeSection from "./components/Youtube.jsx";

function App() {
  return (
    <>
      <div
        className="min-h-screen space-y-4 bg-zinc-950 text-white"
        style={{
          // Ensure the gradient goes from black to a clear dark brown
          "--dark-brown": "#3e2e29", // Dark brown color for theme
        }}
      >
        {/* Profile Section */}
        <Profile />

        {/* YouTube Video Section */}
        <YouTubeSection />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default App;
