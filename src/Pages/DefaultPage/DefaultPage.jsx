import React, { useEffect, useState } from 'react'
import addcomp from "../../assets/addcom.png"

import comp from "../../assets/comp.png"
import addclient from "../../assets/addclient.png"
import clients from "../../assets/clients.png"
import toast, { Toaster } from 'react-hot-toast'

export default function DefaultPage() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(null);
    const [isAddFormVisible, setAddFormVisible] = useState(false);


    const handleView = (company) => {
        setSelectedCompany(company); // Set the selected company data
        setFormData({ ...company }); // Initialize form data
        setShowForm(true); // Show the form
        setIsEditing(false); // Start in view mode
    };

    const handleEdit = () => {
        setIsEditing(true); // Enable editing mode
    };

    const handleCloseForm = () => {
        setShowForm(false); // Hide the form
        setSelectedCompany(null); // Clear the selected company
        setFormData(null); // Reset form data
    };
    const handleCloseAddForm = () => {
        setAddFormVisible(false)

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saved data:", formData); // Replace with API call to save changes
        setShowForm(false); // Hide the form
        toast.success("تم التعديل  بنجاح!");

        setSelectedCompany(formData); // Update selected company
        setIsEditing(false); // Exit editing mode
    };

    const handleReset = () => {
        setFormData({ ...selectedCompany }); // Reset form data to original
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Updates every second

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);


    const [companyData, setCompanyData] = useState([
        { id: 1, code: "1", name: "مصر للطيران", nameEn: "EgyptAir", phone1: "01012345678", phone2: "02012345678", email: "info@egyptair.com" },
        { id: 2, code: "2", name: "الخطوط السعودية", nameEn: "Saudi Airlines", phone1: "01112345678", phone2: "02112345678", email: "info@saudiairlines.com" },
        { id: 3, code: "3", name: "الخطوط الجوية القطرية", nameEn: "Qatar Airways", phone1: "01212345678", phone2: "02212345678", email: "info@qatarairways.com" },
        { id: 4, code: "4", name: "الخطوط الجوية الإماراتية", nameEn: "Emirates Airlines", phone1: "01312345678", phone2: "02312345678", email: "info@emirates.com" },
        { id: 5, code: "5", name: "الخطوط الملكية المغربية", nameEn: "Royal Air Maroc", phone1: "01412345678", phone2: "02412345678", email: "info@royalairmaroc.com" },
    ]);
    const [newCompany, setNewCompany] = useState({
        name: "",
        nameEn: "",
        phone1: "",
        phone2: "",
        email: "",
    });

    const handleInputAdd = (e) => {
        const { name, value } = e.target;
        setNewCompany((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddCompany = () => {
        setAddFormVisible(false); // Hide the form after submitting
        toast.success("تمت الأضافة  بنجاح!");
        const lastCompany = companyData[companyData.length - 1];
        const newId = lastCompany ? lastCompany.id + 1 : 1;
        const newCode = lastCompany ? (parseInt(lastCompany.code) + 1).toString() : "1";

        const companyToAdd = {
            id: newId,
            code: newCode,
            ...newCompany,
        };

        setCompanyData((prev) => [...prev, companyToAdd]);
        setNewCompany({ name: "", nameEn: "", phone1: "", phone2: "", email: "" }); // Reset form
        console.log("New company added:", companyToAdd);
    };
    return <>

        <div className="default-page w-full relative pt-20 md:px-28 px-3 pb-6    ">
            <Toaster />

            {showForm && (
                <div className="view-company flex justify-center items-center inset-0 z-10 absolute bg-black/20">
                    <div className="view-form relative shadow-md shadow-blue-300 px-6 py-6 lg:w-2/5 md:w-5/6 w-full md:mx-0 mx-3 h-fit rounded-lg bg-white">
                        {!isEditing && (
                            <div className="close absolute top-4 left-4 text-black cursor-pointer" onClick={handleCloseForm}>
                                X
                            </div>
                        )}
                        <div
                            className={`edit absolute top-4 right-4 cairo text-sm font-semibold cursor-pointer text-green-700 hover:underline hover:underline-offset-4 ${isEditing ? "hidden" : "block"}`}
                            onClick={handleEdit}
                        >
                            <i className="fa-regular fa-pen-to-square text-xs"></i> تعديل
                        </div>
                        <div className="form-data mt-4">
                            <p className="text-center kufi text-blue-900 font-bold">الشركة المصدرة</p>
                            <div className="comp-code mt-3 ">
                                <label className='cairo font-[620] text-blue-900' htmlFor="compCode">كود الشركة:</label>
                                <input
                                    type="text"
                                    className="text-sm p-1 kufi w-full mt-2 border-2"
                                    value={formData.code}
                                    name="code"
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className="comp-name-ar mt-3 ">
                                <label className='cairo font-[620] text-blue-900' htmlFor="compNameAr">اسم الشركة بالعربية:</label>
                                <input
                                    type="text"
                                    className="text-sm p-1 kufi w-full mt-2 border-2"
                                    value={formData.name}
                                    name="name"
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    disabled={!isEditing}

                                />
                            </div>
                            <div className="comp-name-en mt-3 ">
                                <label className='cairo font-[620] text-blue-900' htmlFor="compNameEn">اسم الشركة بالأنجليزية:</label>
                                <input
                                    type="text"
                                    className="text-sm p-1 kufi w-full mt-2 border-2"
                                    value={formData.nameEn}
                                    name="nameEn"
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    disabled={!isEditing}

                                />
                            </div>
                            <div className="comp-phones md:flex block gap-2 mt-3">
                                <div className="phone-1 ">
                                    <label className='cairo font-[620] text-blue-900' htmlFor="phone1">رقم الهاتف 1:</label>
                                    <input
                                        type="text"
                                        className="kufi w-full mt-2 border-2"
                                        value={formData.phone1}
                                        name="phone1"
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                        disabled={!isEditing}

                                    />
                                </div>
                                <div className="phone-2 ">
                                    <label className='cairo font-[620] text-blue-900' htmlFor="phone2">رقم الهاتف 2:</label>
                                    <input
                                        type="text"
                                        className="kufi w-full mt-2 border-2"
                                        value={formData.phone2}
                                        name="phone2"
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                        disabled={!isEditing}

                                    />
                                </div>
                            </div>
                            <div className="comp-email mt-3 ">
                                <label className='cairo font-[620] text-blue-900' htmlFor="email">الإيميل:</label>
                                <input
                                    type="text"
                                    className="text-sm p-1 kufi w-full mt-2 border-2"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                    disabled={!isEditing}

                                />
                            </div>
                            <div className={`close-btn  mt-5 flex justify-end`}>
                                {isEditing ? (
                                    <div className="flex w-full gap-3 justify-between">

                                        <button
                                            className="kufi bg-gray-500 text-white px-4 py-2 rounded-md"
                                            onClick={handleReset}
                                        >
                                            تراجع
                                        </button>
                                        <button
                                            className="kufi bg-green-500 text-white px-4 py-2 rounded-md"
                                            onClick={handleSave}
                                        >
                                            حفظ
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="bg-black text-white px-4 py-2 rounded-md"
                                        onClick={handleCloseForm}
                                    >
                                        اغلاق
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isAddFormVisible && (
                <div className="add-company flex justify-center items-center inset-0 z-10 absolute bg-black/20">
                    <div className="view-form relative shadow-md shadow-blue-300 px-6 py-6 lg:w-2/5 md:w-5/6 w-full md:mx-0 mx-4 h-fit rounded-lg bg-white">
                        <div
                            className="close absolute top-4 left-4 text-black cursor-pointer"
                            onClick={handleCloseAddForm}
                        >
                            X
                        </div>

                        <div className="form-data mt-8">
                            <p className="text-center kufi text-blue-900 font-bold">اضافة شركة مصدرة</p>

                            <div className="comp-name-ar mt-3 ">
                                <label className='cairo text-blue-900 font-semibold' htmlFor="">اسم الشركة بالعربية:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="p-1 w-full mt-2 border-2"
                                    value={newCompany.name}
                                    onChange={handleInputAdd}
                                />
                            </div>
                            <div className="comp-name-en mt-3 cairo font-semibold">
                                <label className='cairo text-blue-900 font-semibold' htmlFor="compNameEn">اسم الشركة بالأنجليزية:</label>
                                <input
                                    type="text"
                                    name="nameEn"
                                    className="p-1 w-full mt-2 border-2"
                                    value={newCompany.nameEn}
                                    onChange={handleInputAdd}
                                />
                            </div>
                            <div className="comp-phones w-full flex gap-2 mt-3">
                                <div className="phone-1 w-1/2 cairo font-semibold">
                                    <label className='text-blue-900 cairo font-semibold' htmlFor="phone1">رقم الهاتف 1:</label>
                                    <input
                                        type="text"
                                        name="phone1"
                                        className="w-full mt-2 border-2"
                                        value={newCompany.phone1}
                                        onChange={handleInputAdd}
                                    />
                                </div>
                                <div className="phone-2 w-1/2 text-blue-900 cairo font-semibold">
                                    <label className='text-blue-900 cairo font-semibold' htmlFor="phone2">رقم الهاتف 2:</label>
                                    <input
                                        type="text"
                                        name="phone2"
                                        className="w-full mt-2 border-2"
                                        value={newCompany.phone2}
                                        onChange={handleInputAdd}
                                    />
                                </div>
                            </div>
                            <div className="comp-email mt-3 cairo font-semibold">
                                <label className='cairo font-semibold text-blue-900' htmlFor="email">الإيميل:</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="p-1 w-full mt-2 border-2"
                                    value={newCompany.email}
                                    onChange={handleInputAdd}
                                />
                            </div>
                            <div className={`add-btn mt-7 flex justify-center`}>
                                <button
                                    className="bg-green-600 cairo text-white px-4 py-2 rounded-md"
                                    onClick={handleAddCompany}
                                >
                                    اضافة
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="welcome-title">
                <p className='text-lg text-slate-500 font-medium'>{currentDate.toLocaleString()}</p>
                <p className='lg:text-2xl md:text-lg text-sm kufi font-semibold'>اهلاّ  <span className='text-xl text-sky-900 font-bold'>Chames</span>, سعدنا بلقائك مرة اخري!</p>
            </div>
            <div className="md:flex block gap-4 w-full mt-5 ">

                <div className="mosadra-company md:w-1/2 w-full">
                    <div className="search">

                        <input type="search" className='w-full cairo border-2 rounded-md shadow-md px-2 h-9' placeholder="ابحث عن الشركات ..." />
                    </div>
                    <div className="add-view mt-5 flex gap-3 w-full">
                        <div onClick={() => setAddFormVisible(true)} className="add w-1/2 cursor-pointer hover:bg-slate-200 rounded-md flex flex-col justify-center items-center h-36 bg-slate-300 shadow-lg ">
                            <img src={addcomp} className='w-20' alt="" />
                            <p className='text-lg font-semibold cairo'>اضافة شركة</p>
                        </div>
                        <div className="view w-1/2 cursor-pointer hover:bg-slate-200 rounded-md flex flex-col justify-center items-center h-36 bg-slate-300 shadow-lg">
                            <img src={comp} className='w-20' alt="" />

                            <p className='text-lg font-semibold cairo'>عرض الشركات</p>

                        </div>
                    </div>
                </div>
                <div className="clients md:mt-0 mt-3 md:w-1/2 w-full">
                    <div className="search">

                        <input type="search" className='w-full cairo border-2 rounded-md shadow-md px-2 h-9' placeholder="ابحث عن العملاء ..." />
                    </div>
                    <div className="add-view mt-5 flex gap-3 w-full">
                        <div className="add w-1/2 hover:bg-slate-200 cursor-pointer rounded-md flex flex-col justify-center items-center h-36 bg-slate-300 shadow-lg ">
                            <img src={addclient} className='w-20' alt="" />

                            <p className='text-lg font-semibold cairo'>اضافة عميل</p>
                        </div>
                        <div className="view w-1/2 hover:bg-slate-200 cursor-pointer rounded-md flex flex-col justify-center items-center h-36 bg-slate-300 shadow-lg">
                            <img src={clients} className='w-20' alt="" />

                            <p className='text-lg font-semibold cairo'>عرض العملاء</p>

                        </div>
                    </div>

                </div>



            </div>
            <div className="search-table rounded-md mt-8 w-full bg-slate-100">
                <div className="table-title bg-slate-200">
                    <p className='p-3'>الشركات المصدرة</p>

                </div>

                <div className="w-full  flex flex-col">

                    <div className="overflow-x-auto w-full overflow-y-auto ">
                        <div className="min-w-full inline-block align-middle">
                            <div className="border rounded-lg max-h-[400px] overflow-y-auto border-gray-300">
                                <table className="table-auto min-w-full rounded-xl">
                                    <thead className="sticky w-full top-0  bg-blue-100">
                                        <tr>
                                            <th scope="col" className="p-3 text-right whitespace-nowrap text-sm  font-semibold text-gray-900 capitalize">م</th>
                                            <th scope="col" className="p-3 text-right whitespace-nowrap text-sm  font-semibold text-gray-900 capitalize">كود الشركة</th>
                                            <th scope="col" className="p-3 text-right whitespace-nowrap text-sm lg:pe-96 md:pe-60 pe-20  font-semibold text-gray-900 capitalize">اسم الشركة</th>
                                            <th scope="col" className=" text-right whitespace-nowrap text-sm  font-semibold text-gray-900 capitalize">.</th>
                                            <th scope="col" className="text-right whitespace-nowrap text-sm  font-semibold text-gray-900 capitalize">.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-300">
                                        {companyData.map((row) => (
                                            <tr key={row.id}>
                                                <td className="p-3 text-right text-sm text-gray-900">{row.id}</td>
                                                <td className="p-3 text-right text-sm text-gray-900">{row.code}</td>
                                                <td className="p-3 text-right text-sm text-gray-900">{row.name}</td>
                                                <td className="m-0 text-right text-sm text-gray-900">
                                                    <button
                                                        className="w-16 py-1 px-2 kufi text-white rounded-md text-sm bg-green-600 hover:bg-green-500"
                                                        onClick={() => handleView(row)} // Pass the clicked row data
                                                    >
                                                        <i className="fa-regular fa-eye text-xs"></i> عرض
                                                    </button>
                                                </td>
                                                <td className="m-0 text-right text-sm text-gray-900">
                                                    <button
                                                        className="w-16 py-1 px-2 kufi flex justify-center items-center gap-1 text-white rounded-md text-sm bg-red-600 hover:bg-red-500"

                                                    >
                                                        <i className="fa-regular fa-eye text-xs"></i> حذف
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>





    </>
}
