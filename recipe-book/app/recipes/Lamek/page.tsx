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
                    <span className="text-gray-600 dark:text-gray-400">Dificulty: Easy • Serves: 4 • Prep: 10 Mins • Cook: 45 Mins</span>  
                    <br /> <br />
                    <p className="text-gray-600 dark:text-gray-400">This is a recipe for a chicken and chorizo jambalaya. It is a spicy dish that is perfect for a meal.</p>
                    <br /> <br />
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Ingredients</h3>
                    <ul className="space-y-2 mb-8 list-disc list-inside marker:text-orange-500">
                        <li className="text-gray-700 dark:text-gray-300">
                        1 tbsp olive oil
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                        2 chicken breasts, chopped
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                        1 onion, diced
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            1 red pepper, thinly sliced
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            2 garlic cloves, crushed
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            75g chorizo, sliced
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            1 tbsp Cajun seasoning
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            400g can plum tomato
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            250g long grain rice
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            250ml chicken stock
                        </li>
                    </ul>
                    <br /> <br />
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Instructions</h3>
                    <ol className="space-y-2 mb-8 list-decimal list-inside marker:text-orange-500">
                        <li className="text-gray-700 dark:text-gray-300">
                        Heat 1 tbsp olive oil in a large frying pan with a lid over a medium-high heat and brown 2 chopped chicken breasts for 5-8 mins until golden.
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                        Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft.
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                        Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                        Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer over a medium heat for 20-25 mins until the rice is tender.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
