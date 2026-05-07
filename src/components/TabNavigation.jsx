import { motion } from "framer-motion";
import { tabs } from "../data/tabs";

function TabNavigation({ activeTab, setActiveTab })
{
    return (
        <div className = "flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                
                return (
                    <button
                        key ={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                            isActive
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                        }`}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="active-tab"
                                className="absolute inset-0 rounded-full bg-cyan-500/25 ring-1 ring-cyan-300/40"
                                transition={{ type: "spring", stiffness: 380,   damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

export default TabNavigation;