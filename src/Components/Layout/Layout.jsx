import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.jpg";

// import shape from "../../assets/graph.png";
// import Loading from '../Loading/Loading';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [isInSmallSidebarOpen, setIsInSmallSidebarOpen] = useState(false);

    const toggleInSmallSidebar = () => {
        setIsInSmallSidebarOpen((prev) => !prev);
        console.log("fffff");

    };
    // Toggle dropdown visibility
    const toggleOptionDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Function to toggle the sidebar state
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
        console.log("opened");

    };
    const toggleAccountDropdown = (event) => {
        event.stopPropagation(); // Prevent event propagation
        setDropdownVisible((prev) => !prev);
    };

    const hideDropdown = () => {
        setDropdownVisible(false); // Close the dropdown when clicking outside
    };

    useEffect(() => {
        // Attach a click event listener to close the dropdown on outside clicks
        document.addEventListener('click', hideDropdown);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener('click', hideDropdown);
        };
    }, []);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (<>
        <div className=" accounting-page  flex  ">

            <div className={`sidebar z-30  shadow-lg shadow-gray-500 h-screen overflow-y-auto fixed right-0 bg-sky-700 transition-all duration-400 ${isSidebarOpen ? "md:w-72 md:opacity-100 w-0 opacity-0" : "w-0 opacity-0"
                }`}
                style={{ visibility: isSidebarOpen ? "visible" : "hidden" }}
            >

                <div className="company-logo-big fixed z-50 bg-sky-600 w-72 h-32 flex flex-col justify-center items-center  border-b-2 border-white">
                    <img className='w-20 z-20 rounded-full h-20 py-2' src={logo2} alt="" />
                    <p className='text-xs font-semibold text-center text-white kufi'>مؤسسة اسطول السنبلة للخدمات اللوجيستية </p>

                </div>
                <div className="options relative mt-32">
                    <div className={`option-body ${openDropdownIndex === 0 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(0)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> البيانات الاساسية</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 0 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 0 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف الشركات</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف الفروع</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف العملات</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 1 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(1)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> الصلاحيات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 1 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 1 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">مجموعات المستخدمين</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف المستخدمين</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">صلاحيات مجموعات المستخدمين</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">صلاحيات الترحيل و فك الترحيل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">صلاحيات الصناديق و البنوك</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 2 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(2)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> الأعدادات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 2 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 2 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">اعدادات الترقيم</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف السندات</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف الفواتير</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">اعدادات الحساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 3 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(3)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> تعريفات الحسابات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 3 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 3 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">الفترات المحاسبية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">شجرة الحسابات</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">شجرة مراكز التكلفة  </p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 4 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(4)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> عمليات الحسابات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 4 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 4 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">الارصدة الأفتتاحية للحسابات</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">قيود اليومية</p>
                            </div>

                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 5 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(5)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> الصناديق</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 5 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 5 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف الصناديق</p>
                            </div>

                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 6 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(6)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> البنوك</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 6 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 6 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف البنوك</p>
                            </div>

                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 7 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(7)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> تقارير الحسابات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 7 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 7 ? "h-fit" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">كشف حساب</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">حركة حساب </p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">ارصدة الحسابات</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">دفتر استاذ حساب</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">ميزان المراجعة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">ميزان المراجعة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 8 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(8)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> تعريفات المخازن</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 8 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 8 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف المخازن</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">الوان الاصناف</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">مقاسات الاصناف</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 9 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(9)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> عمليات المبيعات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 9 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 9 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 10 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(10)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> عمليات المشتريات</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 10 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 10 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 11 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(11)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> بيانات اساسية لشئون الموظفين</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 11 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 11 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 12 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(12)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo ">الموظفيين و سياسة الرواتب</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 12 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 12 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 13 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(13)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> تعريفات الشحن و التخليص</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 13 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 13 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">اعدادات الشحن</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">الشركات المصدرة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">تعريف وكلاء الشحن</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> الميزانية</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> قائمة الدخل</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo"> حساب</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 14 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(14)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> البيانات التعريفية</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 14 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 14 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">مصر</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">كرواتيا</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">اي كلام</p>
                            </div>
                        </div>
                    </div>
                    <div className={`option-body ${openDropdownIndex === 15 ? "border border-sky-400" : ""}`}>
                        <div
                            className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                            onClick={() => toggleOptionDropdown(15)}
                        >
                            <div className="option-title w-full flex justify-between items-center">
                                <div className="title-icon flex items-center gap-2">
                                    <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                    <p className="text-white cairo "> البيانات التعريفية</p>
                                </div>
                                <i
                                    className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 15 ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </div>
                        </div>
                        <div
                            className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 15 ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">مصر</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">كرواتيا</p>
                            </div>
                            <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                <p className="text-white text-sm cairo">اي كلام</p>
                            </div>
                        </div>
                    </div>





                </div>





            </div>
            <div className={`sidebar-in-small  fixed inset-0 md:hidden block z-50 bg-black/20 transition-opacity duration-300 ${isInSmallSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={toggleInSmallSidebar} // Close when clicking outside the sidebar
            >
                <div
                    className={`sidebar shadow-lg shadow-gray-500 h-screen overflow-y-auto fixed right-0 bg-sky-700 transition-transform duration-300 ${isInSmallSidebarOpen ? "translate-x-0" : "translate-x-full"
                        } w-72`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
                >

                    <div className="company-logo-big fixed z-50 bg-sky-600 w-72 h-32 flex flex-col justify-center items-center  border-b-2 border-white">
                        <img className='w-20 z-20 rounded-full h-20 py-2' src={logo2} alt="" />
                        <p className='text-xs font-semibold text-center text-white kufi'>مؤسسة اسطول السنبلة للخدمات اللوجيستية </p>

                    </div>
                    <div className="options relative mt-32">
                        <div className={`option-body ${openDropdownIndex === 0 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(0)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> البيانات الاساسية</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 0 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 0 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف الشركات</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف الفروع</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف العملات</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 1 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(1)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> الصلاحيات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 1 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 1 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">مجموعات المستخدمين</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف المستخدمين</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">صلاحيات مجموعات المستخدمين</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">صلاحيات الترحيل و فك الترحيل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">صلاحيات الصناديق و البنوك</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 2 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(2)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> الأعدادات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 2 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 2 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">اعدادات الترقيم</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف السندات</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف الفواتير</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">اعدادات الحساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 3 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(3)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> تعريفات الحسابات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 3 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 3 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">الفترات المحاسبية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">شجرة الحسابات</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">شجرة مراكز التكلفة  </p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 4 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(4)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> عمليات الحسابات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 4 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 4 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">الارصدة الأفتتاحية للحسابات</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">قيود اليومية</p>
                                </div>

                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 5 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(5)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> الصناديق</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 5 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 5 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف الصناديق</p>
                                </div>

                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 6 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(6)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> البنوك</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 6 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 6 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف البنوك</p>
                                </div>

                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 7 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(7)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> تقارير الحسابات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 7 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 7 ? "h-fit" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">كشف حساب</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">حركة حساب </p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">ارصدة الحسابات</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">دفتر استاذ حساب</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">ميزان المراجعة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">ميزان المراجعة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 8 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(8)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> تعريفات المخازن</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 8 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 8 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف المخازن</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">الوان الاصناف</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">مقاسات الاصناف</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 9 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(9)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> عمليات المبيعات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 9 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 9 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 10 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(10)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> عمليات المشتريات</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 10 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 10 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 11 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(11)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> بيانات اساسية لشئون الموظفين</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 11 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 11 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 12 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(12)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo ">الموظفيين و سياسة الرواتب</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 12 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 12 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 13 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(13)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> تعريفات الشحن و التخليص</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 13 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 13 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">اعدادات الشحن</p>
                                </div>
                                <Link to={"/exporters"}>

                                    <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                        <p onClick={() => {
                                            console.log("clisss");
                                        }} className="text-white text-sm cairo">الشركات المصدرة</p>
                                    </div>
                                </Link>

                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">تعريف وكلاء الشحن</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> الميزانية</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> قائمة الدخل</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب مركز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير ارصدة مراكز التكلفة</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> تقرير كشف حساب علي مراكز التكلفة تفصيلي</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo"> حساب</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 14 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(14)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> البيانات التعريفية</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 14 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 14 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">مصر</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">كرواتيا</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">اي كلام</p>
                                </div>
                            </div>
                        </div>
                        <div className={`option-body ${openDropdownIndex === 15 ? "border border-sky-400" : ""}`}>
                            <div
                                className="sidebar-option w-full flex flex-col justify-center px-3 h-12 border-b border-gray-400 cursor-pointer"
                                onClick={() => toggleOptionDropdown(15)}
                            >
                                <div className="option-title w-full flex justify-between items-center">
                                    <div className="title-icon flex items-center gap-2">
                                        <i className="text-slate-200 fa-solid fa-list"></i>{" "}
                                        <p className="text-white cairo "> البيانات التعريفية</p>
                                    </div>
                                    <i
                                        className={`fa-solid fa-angle-down text-white transition-transform ${openDropdownIndex === 15 ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                className={`options-dropdown bg-sky-600 overflow-hidden transition-all duration-300 ${openDropdownIndex === 15 ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">مصر</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">كرواتيا</p>
                                </div>
                                <div className="option border-b hover:bg-sky-500 cursor-pointer border-sky-500 w-full h-9 px-3 flex items-center">
                                    <p className="text-white text-sm cairo">اي كلام</p>
                                </div>
                            </div>
                        </div>





                    </div>











                </div>
            </div>
            <div className={`small-sidebar  z-30 flex flex-col shadow-xl items-center h-screen fixed bg-sky-700 text-white transition-all duration-300 ${isSidebarOpen ? "md:hidden" : "w-16"
                }`}
            >

                <div className="company-logo w-16 h-13 flex justify-center items-center px-3 py-1 bg-sky-600 ">
                    <img className='w-16 h-13 rounded-full' src={logo2} alt="" />

                </div>

                <i
                    className=" absolute -left-9 top-16 rounded-l-md py-2 bg-sky-700  fa-solid px-3 fa-bars md:hidden flex text-lg text-white cursor-pointer"
                    onClick={toggleInSmallSidebar}
                ></i>
                <div className="flex flex-col items-center  ">
                    <a className="flex border-t border-gray-400  items-center justify-center w-16 h-16   hover:text-white"
                        href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <Link to={"/home"} className="flex items-center  justify-center w-16 h-16   hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                    <a className="flex items-center  justify-center w-16 h-16    hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-16 h-16  hover:text-gray-200  " href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-16 h-16  hover:text-gray-200  " href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>


                </div>
                <div className="flex flex-col items-center  border-t border-gray-700">
                    <a className="flex items-center justify-center w-16 h-16    hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-16 h-16    hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-16 h-16    hover:text-white" href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </a>
                    <a className="relative flex items-center justify-center w-16 h-16    hover:text-white"
                        href="#">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 -full"></span>
                    </a>
                </div>
                <a className="flex items-center justify-center w-16 h-16  rounded  hover:text-white" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                </a>
            </div>

            <div className={`content h-screen overflow-auto relative transition-all duration-400 ${isSidebarOpen ? "md:ms-72 ms-16 w-full " : "ms-16 w-full "
                }`}
            >

                <nav className='nav-2 w-full  z-50 bg-sky-700 px-5   shadow-md flex justify-between items-center    '>

                    <div className='open-and-close-sidebar flex md:gap-2   items-center'>
                        <i
                            className="fa-solid fa-bars md:flex hidden text-lg text-white cursor-pointer"
                            onClick={toggleSidebar}
                        ></i>

                        <div
                            className="welcome-name  z-40 relative rounded-sm hover:bg-sky-800 cursor-pointer py-3 px-3 items-center flex gap-1"
                            onClick={toggleAccountDropdown}
                        >
                            <div className="img md:w-8 md:h-8 w-5 h-5 border-2 border-white rounded-full md:text-sm text-xs bg-blue-600 flex justify-center items-center text-white font-medium">
                                Ch
                            </div>
                            <div className="name flex items-center gap-1">
                                <p className='text-white md:block hidden cairo'>اهلاّ وسهلا ,</p>
                                <p className='text-slate-100 font-medium '>Chames</p>
                                <i className="fa-solid fa-angle-down text-slate-300 text-sm"></i>
                            </div>



                            <div
                                className={`account-drop-down ${isDropdownVisible ? "visible opacity-100" : "invisible opacity-0"
                                    } absolute shadow-lg rounded top-14 bg-green-300 w-60 right-0 flex flex-col transition-opacity duration-500`}
                            >
                                <p className="w-full rounded-t-md bg-slate-200 text-sm cairo font-[650] p-2">
                                    حسابي
                                </p>
                                <p className="w-full hover:bg-slate-100 cursor-pointer bg-slate-50 text-sm flex gap-2 items-center cairo p-2">
                                    <i className="fa-solid text-sm fa-envelope"></i> تغير البريد
                                    الألكتروني
                                </p>
                                <p className="w-full hover:bg-slate-100 cursor-pointer bg-slate-50 text-sm flex gap-2 items-center cairo p-2">
                                    <i className="fa-solid fa-key"></i> تغير كلمة المرور
                                </p>
                                <p className="w-full hover:bg-slate-100 cursor-pointer bg-slate-50 text-sm flex gap-2 items-center cairo p-2">
                                    <i className="fa-solid fa-gear"></i> الأعدادات
                                </p>
                                <p className="w-full cursor-pointer bg-slate-200 text-sm flex gap-2 items-center cairo font-[650] p-2">
                                    <i className="fa-solid fa-right-from-bracket"></i> تسجيل الخروج
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className="branch">


                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="flex justify-between rounded-md w-24  gap-x-1.5 bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset "
                                    id="menu-button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    onClick={toggleDropdown}
                                >
                                    <p className=' kufi'>                                    الفرع
                                    </p>
                                    <svg
                                        className={`-mr-1 h-5 w-5 text-white transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {isOpen && (
                                <div dir='rtl'
                                    className="branches absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div dir='rtl' className="py-1" role="none">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-0"
                                        >
                                            انجاز للتخليص الجمركي
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-1"
                                        >
                                            branch 1
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>



                </nav>


                <div className="outlet w-full  ">
                    <Outlet></Outlet>
                </div>







            </div>









        </div >


    </>

    )
}
