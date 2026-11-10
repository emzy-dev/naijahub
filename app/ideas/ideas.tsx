"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import Image from "next/image";

const Ideas = () => {
    const [arr, setArr] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handleFetch = async () => {
        try {
            const dbArray: any[] = [];
            const querySnapshot = await getDocs(collection(db, "business_ideas"));
            
            querySnapshot.forEach((docItem) => {
                const data = { id: docItem.id, ...docItem.data() };
                dbArray.push(data);
            });

            setArr(dbArray);
        } catch (error) {
            console.error("Error fetching ideas>>>>", error);   
            alert("An error occurred while fetching!");
        } finally {
            setLoading(false);
        }
    };

    // Delete handler to remove document from Firestore and update state
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this business idea?")) return;
        try {
            await deleteDoc(doc(db, "business_ideas", id));
            setArr(arr.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting document:", error);
            alert("Failed to delete idea.");
        }
    };

    useEffect(() => { 
        handleFetch(); 
    }, []);

    if (loading) {
        return <p className="p-6 text-xs text-neutral-500 font-medium">Loading business ideas...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 font-sans">
            <h1 className="text-xl md:text-2xl font-black mb-6 text-[#1A2218]">Naija Venture Hub - Business Ideas</h1>

            {arr.length === 0 ? (
                <p className="text-xs text-neutral-500">No business ideas found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {arr.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D1EDD3] text-[#115E59]">
                                        {item.sector || "General"}
                                    </span>
                                    <span className="text-[10px] text-neutral-400">
                                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
                                    </span>
                                </div>

                                <h2 className="text-base font-extrabold text-neutral-900">{item.name || "Untitled Venture"}</h2>
                                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">{item.info}</p>
                            </div>
                            
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="mt-4 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded-xl hover:bg-red-100 transition self-start"
                            >
                                Delete Idea
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ideas;