import React from "react";
import Title from "./Title";
import { designers } from "../util/mock";
import Designer from "./Designer";
export function DesignersContent() {

    const {title, users} = designers

    return (
        <div className="px-[100px] mt-16 mb-8">
            <div className=" border-t border-slate-950 pt-6"></div>
            <div className="flex justify-between">
                <Title title={title} />
                <div className='text-xl text-blue cursor-pointer'>Bce дизайнеры</div>
            </div>
            <div className="designers-wrap grid grid-cols-4 gap-16 container mx-auto">
            {
                users.map(user => <Designer key={user.id} user={user}/>)
            }
            </div>
        </div>

    );
}