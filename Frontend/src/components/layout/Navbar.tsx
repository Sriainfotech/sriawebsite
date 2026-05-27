import React, { useState, useEffect } from "react";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface DropdownSection {
    title: string;
    link?: string;
    items: { label: string; link: string }[];
}

interface MegaMenuProps {
    id: string;
    label: string;
    sections: DropdownSection[];
    width?: string;
    layout?: "single" | "multi" | "two-row" | "nested";
}

interface NavbarProps {
    enableScrollEffect?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    enableScrollEffect = true,
}) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [showLanguages, setShowLanguages] = useState(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (dropdown: string) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
        setHoverTimeout(timeout);
    };

    useEffect(() => {
        if (!enableScrollEffect) return;
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [enableScrollEffect]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMobileMenuOpen &&
                !(event.target as Element).closest(".mobile-menu-container")
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const MegaMenu: React.FC<MegaMenuProps> = ({
        id,
        label,
        sections,
        width = "w-full",
        layout = "multi",
    }) => (
        <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to={id === "about" ? "/aboutus" : "#"}
                className="flex items-center text-white hover:text-orange-300 transition-colors font-normal text-sm whitespace-nowrap group font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                onClick={(e) => {
                    if (id !== "about") {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === id ? null : id);
                    }
                }}
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={activeDropdown === id}
            >
                {label}
                <ChevronDown
                    className={`w-3 h-3 ml-1 transition-transform duration-200 ${activeDropdown === id ? "rotate-180" : ""}`}
                />
            </Link>

            {layout === "single" ? (
                <div
                    className={`absolute left-0 right-0 z-50 top-10 transition-all duration-300 ${activeDropdown === id
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-4"
                        }`}
                >
                    <div className="bg-[#0F0F0F] shadow-2xl border border-gray-700 py-4 px-4 min-w-[200px]">
                        <div className="space-y-3">
                            {sections[0]?.items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ) : layout === "nested" ? (
                <div
                    className={`absolute left-0 z-50 top-10 transition-all duration-300 ${activeDropdown === id
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-4"
                        }`}
                >
                    <div className="bg-[#0F0F0F] shadow-2xl border border-gray-700 py-2 min-w-[240px]">
                        <ul className="flex flex-col">
                            {sections.map((section, idx) => (
                                <li key={idx} className="group/item relative">
                                    {section.items.length > 0 ? (
                                        <>
                                            <button
                                                className="w-full text-left px-4 py-3 text-gray-300 hover:text-orange-300 hover:bg-gray-800 transition-colors text-base font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif] flex items-center justify-between"
                                            >
                                                {section.title}
                                                <ChevronDown className="w-4 h-4 -rotate-90" />
                                            </button>
                                            {/* Nested Dropdown */}
                                            <div className="absolute left-full top-0 invisible opacity-0 -translate-x-2 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 z-50">
                                                <div className="bg-[#0F0F0F] shadow-2xl border border-gray-700 py-2 min-w-[240px] ml-1">
                                                    <ul className="flex flex-col">
                                                        {section.items.map((item, itemIdx) => (
                                                            <li key={itemIdx}>
                                                                <a
                                                                    href={item.link}
                                                                    className="block px-4 py-2 text-gray-300 hover:text-orange-300 hover:bg-gray-800 transition-colors text-sm font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                                                >
                                                                    {item.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <a
                                            href={section.link}
                                            className="block px-4 py-3 text-gray-300 hover:text-orange-300 hover:bg-gray-800 transition-colors text-base font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                        >
                                            {section.title}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div
                    className={`fixed top-20 left-0 right-0 z-50 transition-all duration-300 ${activeDropdown === id
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-4"
                        }`}
                >
                    <div className="w-full px-4 sm:px-8 flex justify-center">
                        <div className="w-full max-w-screen-xl xl:max-w-[1600px]">
                            <div
                                className="bg-[#0F0F0F] shadow-2xl border border-gray-700 py-8 px-4 sm:px-16"
                                style={{
                                    fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
                                    fontWeight: 400,
                                }}
                            >
                                {layout === "multi" && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
                                        {sections.map((section, idx) => (
                                            <div key={idx}>
                                                {section.title && (
                                                    <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                                        {section.title}
                                                    </h4>
                                                )}
                                                <ul className="space-y-3">
                                                    {section.items.map((item, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href={item.link}
                                                                className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                                            >
                                                                {item.label}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {layout === "two-row" && (
                                    <div className="space-y-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
                                            {sections.slice(0, 5).map((section, idx) => (
                                                <div key={idx}>
                                                    <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href={item.link}
                                                                    className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                                                >
                                                                    {item.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-600 pt-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
                                                {sections.slice(5).map((section, idx) => (
                                                    <div key={idx}>
                                                        <h4 className="text-white font-normal mb-5 text-base border-b border-gray-600 pb-3 font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                                            {section.title}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {section.items.map((item, index) => (
                                                                <li key={index}>
                                                                    <a
                                                                        href={item.link}
                                                                        className="text-gray-300 hover:text-orange-300 transition-colors text-base py-1 block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                                                    >
                                                                        {item.label}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const MobileMenuItem: React.FC<{
        label: string;
        sections: DropdownSection[];
        id: string;
    }> = ({ label, sections, id }) => {
        const isAboutSection = id === "mobile-about";

        if (isAboutSection) {
            return (
                <div className="border-b border-gray-700">
                    <div className="flex">
                        <Link
                            to="/aboutus"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex-1 py-4 text-white hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                        >
                            {label}
                        </Link>
                        <button
                            onClick={() =>
                                setActiveMobileDropdown(activeMobileDropdown === id ? null : id)
                            }
                            className="px-4 py-4 text-white hover:text-orange-300 transition-colors"
                        >
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === id ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === id ? "max-h-96 pb-4" : "max-h-0"}`}
                    >
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx} className={section.title ? "mb-4" : "mb-2"}>
                                {section.title && (
                                    <h5 className="text-orange-300 font-normal mb-2 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                        {section.title}
                                    </h5>
                                )}
                                <ul className="space-y-2 ml-4">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <a
                                                href={item.link}
                                                className="text-gray-300 hover:text-orange-300 transition-colors text-sm block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="border-b border-gray-700">
                <button
                    onClick={() =>
                        setActiveMobileDropdown(activeMobileDropdown === id ? null : id)
                    }
                    className="w-full flex items-center justify-between py-4 text-white hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                >
                    {label}
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === id ? "rotate-180" : ""}`}
                    />
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === id ? "max-h-[1000px] pb-4" : "max-h-0"}`}
                >
                    {sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className={section.title ? "mb-4" : "mb-2"}>
                            {section.title && (
                                <h5 className="text-orange-300 font-normal mb-2 text-sm font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                    {section.title}
                                </h5>
                            )}
                            <ul className="space-y-2 ml-4">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <a
                                            href={item.link}
                                            className="text-gray-300 hover:text-orange-300 transition-colors text-sm block font-normal font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const getNavBackground = () => {
        if (!enableScrollEffect) {
            return "bg-gray-900 shadow-lg";
        }
        return scrolled ? "bg-gray-900 shadow-lg backdrop-blur-md" : "bg-transparent";
    };

    const productsSections: DropdownSection[] = [
        {
            title: "Accelerated Products",
            items: [
                { label: "Auto Extract", link: "/products/auto-extract" },
                { label: "NxDesk", link: "/products/nxdesk" },
                { label: "Nxify", link: "/products/nxify" },
                { label: "Jatayu", link: "/products/jatayu" },
                { label: "Gate Check", link: "/products/gatecheck" },
            ],
        },
    ];

    const solutionsSections: DropdownSection[] = [
        {
            title: "",
            items: [
                { label: "Rise with SAP", link: "/solutions/rise-with-sap" },
                { label: "SAP S/4 HANA Private Cloud", link: "/solutions/private-cloud" },
                { label: "SAP S/4 HANA Public Cloud", link: "/solutions/public-cloud" },
                { label: "SAP SuccessFactors", link: "/solutions/successfactors" },
                { label: "SAP Commerce Cloud", link: "/solutions/commerce-cloud" },
                { label: "SAP Concur", link: "/solutions/concur" },
            ],
        },
        {
            title: "",
            items: [
                { label: "SAP Ariba", link: "/solutions/ariba" },
                { label: "SAP Manufacturing Execution", link: "/solutions/manufacturing-execution" },
                { label: "SAP Manufacturing Logistics", link: "/solutions/manufacturing-logistics" },
                { label: "SAP Digital Manufacturing", link: "/solutions/digital-manufacturing" },
                { label: "SAP Business Network for Logistics", link: "/solutions/business" },
            ],
        },
        {
            title: "",
            items: [
                { label: "SAP Fieldglass", link: "/solutions/fieldglass" },
                { label: "SAP Extended Warehouse Management", link: "/solutions/extended-warehouse-management" },
                { label: "SAP Product Lifecycle", link: "/solutions/product-lifecycle" },
                { label: "SAP Asset Performance Management", link: "/solutions/asset-performance-management" },
                { label: "SAP Field Service Management", link: "/solutions/field-service-management" },
            ],
        },
    ];

    const servicesSections: DropdownSection[] = [
        {
            title: "SAP",
            items: [
                { label: "Implementation", link: "/implement" },
                { label: "Rollouts", link: "/rollouts" },
                { label: "Application Development", link: "/application-development" },
                { label: "Integration", link: "/integration" },
                { label: "Support & Maintenance", link: "/support-maintainance" },
                { label: "Upgrades", link: "/upgrades" },
                { label: "Migrations", link: "/migrations" },
                { label: "Fiori Development", link: "/fioridevelop" }, // kept original
                { label: "ABAP RAP Services", link: "/abap" },
            ],
        },
        {
            title: "Odoo Implementation",
            items: [
                { label: "Odoo Implementation", link: "/odooservices/implementation" },
                { label: "Custom App Development", link: "/odooservices/customdevelopment" },
            ],
        },
        {
            title: "Data Analytics",
            link: "/additionalServices/dataanalytics",
            items: [],
        },
    ];

    const insightsSections: DropdownSection[] = [
        {
            title: "Insights",
            items: [
                { label: "Success Stories", link: "/insights/customer-stories" },
                { label: "Blogs", link: "/insights/blogs" },
                { label: "Newsroom", link: "/insights/newsroom" },
                { label: "White Papers", link: "/insights/white-papers" },
                { label: "Videos", link: "/insights/videos" },
                { label: "Brochures", link: "/insights/brochures" },
            ],
        },
    ];

    const aboutSections: DropdownSection[] = [
        {
            title: "About Us",
            items: [
                { label: "Leadership", link: "/about/leadership" },
                { label: "SAP Partner", link: "/about/sap-partner" },
                { label: "Careers", link: "/about/careers" },
                { label: "Alliances", link: "/about/alliances" },
                { label: "Success Stories", link: "/about/customer-stories" },
                { label: "Events", link: "/about/events" },
                { label: "Locations", link: "/about/locations" },
            ],
        },
    ];

    return (
        <div className="relative font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal">
            <style>
                {`
 @keyframes scroll {
 0% { transform: translateX(100%); }
 100% { transform: translateX(-100%); }
 }
 `}
            </style>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}
            >
                <div className={`transition-all duration-300 bg-orange-500 text-white text-left font-medium text-sm overflow-hidden h-5 flex justify-end items-center`}>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            display: "inline-block",
                            paddingLeft: "30%",
                            animation: "scroll 30s linear infinite",
                        }}
                    >
                        IVC Consulting Group is our Global Partner, enhancing our international delivery capability and enabling seamless collaboration across SAP implementation, rollout, and support engagements worldwide. &nbsp;<a href="https://ivcsol.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", opacity: 0.85 }}>Learn more →</a>
                        {/* Our website is currently undergoing an upgrade to improve your browsing experience. */}
                    </div>
                </div>

                <div className="w-full h-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-screen-xl xl:max-w-[1600px] flex items-center justify-between h-16">
                        <div className="flex flex-row items-center">
                            <Link to="/" className="font-bold flex flex-row items-center">
                                <img src='https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454981/sria/logo.png' alt="Logo" className="h-auto w-28" />
                            </Link>
                        </div>

                        <div className="hidden xl:flex items-center space-x-6">
                            <MegaMenu
                                id="products"
                                label="Products"
                                sections={productsSections}
                                layout="single"
                            />
                            <MegaMenu
                                id="solutions"
                                label="Solutions"
                                sections={solutionsSections}
                                layout="multi"
                            />
                            <MegaMenu
                                id="services"
                                label="Services"
                                sections={servicesSections}
                                layout="nested"
                            />
                            <MegaMenu
                                id="about"
                                label="About"
                                sections={aboutSections}
                                layout="single"
                            />
                            <Link
                                to="/gallery"
                                className="flex items-center text-white hover:text-orange-300 transition-colors font-normal text-sm whitespace-nowrap font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                            >
                                Our Culture
                            </Link>
                            <a
                                href="https://nxsysdigital.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-orange-400 hover:text-orange-300 transition-colors font-normal text-sm whitespace-nowrap font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                            >
                                NxSys Digital
                            </a>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="hidden md:flex items-center space-x-3">
                            </div>
                            <Link
                                to="/contactus"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 rounded font-medium transition-colors text-sm"
                            >
                                Contact Us →
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="xl:hidden text-white hover:text-orange-300 transition-colors"
                                aria-label="Open mobile menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] xl:hidden">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
                        <div className="flex items-center justify-between p-4 border-b border-gray-700">
                            <h2 className="text-white text-lg font-semibold font-[Questrial,Arial,Verdana,Tahoma,sans-serif]">
                                Menu
                            </h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-orange-300 transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            <MobileMenuItem
                                label="Products"
                                sections={productsSections}
                                id="mobile-products"
                            />
                            <MobileMenuItem
                                label="Solutions"
                                sections={solutionsSections}
                                id="mobile-solutions"
                            />
                            <MobileMenuItem
                                label="Services"
                                sections={servicesSections}
                                id="mobile-services"
                            />
                            <MobileMenuItem
                                label="About"
                                sections={aboutSections}
                                id="mobile-about"
                            />
                            <div className="border-b border-gray-700">
                                <Link
                                    to="/gallery"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-4 text-white hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                >
                                    Our Culture
                                </Link>
                            </div>
                            <div className="border-b border-gray-700">
                                <a
                                    href="https://nxsysdigital.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-4 text-orange-400 hover:text-orange-300 transition-colors font-normal text-base font-[Questrial,Arial,Verdana,Tahoma,sans-serif]"
                                >
                                    NxSys Digital
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

