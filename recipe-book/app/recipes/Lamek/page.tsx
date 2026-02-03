import Link from 'next/link';

export default function Lamek() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Back Button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Recipe Book
                </Link>

                {/* Recipe Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                        Lamek's Favourite Recipe
                    </h1>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        Chicken & Chorizo Jambalaya
                    </h2>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        This is a recipe for a chicken and chorizo jambalaya. It is a spicy dish that is perfect for a meal.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Ingredients
                    </h3>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-orange-500 mr-3 mt-1">•</span>
                            <span>1 lb. of chicken</span>
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-orange-500 mr-3 mt-1">•</span>
                            <span>1 lb. of chorizo</span>
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-orange-500 mr-3 mt-1">•</span>
                            <span>1 onion</span>
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-orange-500 mr-3 mt-1">•</span>
                            <span>1 bell pepper</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
