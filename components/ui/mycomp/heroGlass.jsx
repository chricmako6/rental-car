"use client" 
import React from "react";
import { Search, ArrowUpRight } from 'lucide-react';
import { Input } from "@/components/ui/input"; // shadcn/ui Input
import { Label } from "@/components/ui/label"; // shadcn/ui Label
import { Calendar } from "@/components/ui/calendar"; // shadcn/ui Calendar
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";


export default function HeroGlass() {
    const [date, setDate] = React.useState();

    return (
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex flex-col w-full md:w-auto flex-1">
                    <Label className="text-white font-semibold mb-1">Location</Label>
                    <Input
                        type="text"
                        placeholder="Search location for rental"
                        className="px-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col w-full md:w-auto flex-1">
                    <Label className="text-white font-semibold mb-1">Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                className="w-full px-4 py-1.5 rounded-lg bg-white/60 text-primary-foreground text-left focus:outline-none"
                                type="button"
                            >
                                {date ? format(date, "PPP") : "Pick a date"}
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/80 transition mt-4 md:mt-6">
                    <Search />
                    Search
                </button>
            </div>
            {/* Navigation */}
            <div className="flex flex-col items-center mt-6">
                <div className="flex items-center gap-2">
                    <p className="text-primary-foreground font-semibold ">
                        Not sure? <span className="text-primary font-semibold">Explore our top tour vehicles</span>
                    </p>
                    <ArrowUpRight className="text-primary w-5 h-5" />
                </div>
            </div>
        </div>
    );
}