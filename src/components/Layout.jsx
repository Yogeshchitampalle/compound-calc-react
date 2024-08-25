
export function Layout(props) {
    const { children } = props;
    return (
        <>
            <h1 className="text-center fw-semibold light-green-bg opacity-0.2 cursor-pointer ">
                🚀 Higher FD Investment rates than your bank..!
                <br></br>First Calculate
            </h1>
            <div className="min-h-screen bg-gray-800 text-white flex flex-col gap-6 sm:gap-8 md:gap-5 p-4 md:p-6 lg:p-8">
                <header className="flex flex-col gap-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 w-full mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
                        Compound Interest Calculator
                    </h1>
                    <div className="flex items-center gap-4 text-xl sm:text-2xl md:text-3xl">
                        <i className="fa-solid fa-money-bill-wave green-money"></i>
                        <i className="fa-solid fa-money-bill-wave green-money"></i>
                        <i className="fa-solid fa-money-bill-wave green-money"></i>
                    </div>
                </header>
                <p className="text-center text-slate-200 text-sm md:text-base">
                    <span className="bg-dark-500 opacity-0.5 cursor-pointer text-white text-lg font-semibold ml-2 px-3 py-1.5 rounded">
                        Compound till I die!
                    </span>
                </p>
                <main className="flex-1 flex flex-col gap-4 max-w-[600px] w-full mx-auto">
                    {children}
                </main>
                <footer className="flex items-center justify-center p-4  text-slate-200">
                    <p>© 2024  All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
