import fs from "fs/promises";
import CustomBarChart from '@/components/Reports/CustomBarChart';
import ReportsBanner from '@/components/Reports/ReportsBanner';
import Stats from '@/components/Reports/Stats';
import React from 'react';
import { List } from '../_components/list';

const Page = async () => {
    let files: string[] = [];

    try {
        files = await fs.readdir("uploads");
    } catch (error) {
        console.error(error);
        await fs.mkdir("uploads", { recursive: true });
    }

    return (
        <div>
            <ReportsBanner />
            <Stats />
            <CustomBarChart />
            <List files={files} />
        </div>
    );
};

export default Page;