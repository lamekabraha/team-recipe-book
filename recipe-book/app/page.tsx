import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-4">
            Recipe Book
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A collection of our team's favorite recipes
          </p>
        </header>

        {/* Recipe List */}
        <div>
          <Link href="/recipes/Lamek">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-orange-500">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Lamek's Favourite Recipe
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Chicken & Chorizo Jambalaya
              </p>
            </div>
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-orange-500">
            {/* <Link href="/recipes/2"> */}
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Recipe 2
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Click to view recipe details
              </p>
            {/* </Link> */}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-orange-500">
            {/* <Link href="/recipes/2"> */}
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Recipe 3
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Click to view recipe details
              </p>
            {/* </Link> */}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-orange-500">
            {/* <Link href="/recipes/2"> */}
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Recipe 4
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Click to view recipe details
              </p>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
