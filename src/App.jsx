import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Styling",
    "DevOps",
    "Tools",
  ];

  // Load technology data from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Technology data load করা যায়নি");
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} already added!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove single technology
  const removeFromStack = (id) => {
    const removedItem = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.info(
        `${removedItem.name} removed from stack`
      );
    }
  };

  // Remove all technologies
  const removeAll = () => {
    if (stack.length === 0) {
      toast.info("Your stack is already empty");
      return;
    }

    setStack([]);
    toast.info("All technologies removed");
  };

  // Filter technologies
  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) =>
            technology.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Technologies Section */}
        <section
          id="technologies"
          className="border-t border-gray-100 bg-gray-50/60 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-orange-50 px-4 py-1.5 text-xs font-extrabold tracking-widest text-orange-500">
                TECHNOLOGIES
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Explore the{" "}
                <span className="gradient-text">
                  Technologies
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Choose the technologies you need and build
                your ideal development stack.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const isActive =
                  selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                      isActive
                        ? "gradient-bg text-white shadow-md"
                        : "border border-gray-200 bg-white text-gray-500 hover:border-pink-300 hover:text-pink-600"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Main Technology Area */}
            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

              {/* Technology Cards */}
              <div>
                {loading ? (
                  <div className="grid min-h-[350px] place-items-center rounded-2xl border border-gray-200 bg-white">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

                      <p className="mt-4 text-sm font-semibold text-gray-500">
                        Loading technologies...
                      </p>
                    </div>
                  </div>
                ) : filteredTechnologies.length === 0 ? (
                  <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
                    <div className="text-4xl">🔍</div>

                    <h3 className="mt-4 text-lg font-bold text-gray-800">
                      No technologies found
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      এই category-তে কোনো technology
                      পাওয়া যায়নি।
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2">
                    {filteredTechnologies.map(
                      (technology) => (
                        <TechnologyCard
                          key={technology.id}
                          technology={technology}
                          onAdd={addToStack}
                          isAdded={stack.some(
                            (item) =>
                              item.id === technology.id
                          )}
                        />
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Your Stack Sidebar */}
              <StackSidebar
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full bg-purple-50 px-4 py-1.5 text-xs font-extrabold tracking-widest text-purple-600">
              ABOUT DEV STACK
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Build your stack.
              <br />
              <span className="gradient-text">
                Build your future.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              DevStack helps developers explore modern
              technologies and create a personalized
              development stack based on their project
              needs.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-gray-600">
                Modern Technologies
              </span>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-gray-600">
                Developer Friendly
              </span>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-gray-600">
                Build Your Stack
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;

