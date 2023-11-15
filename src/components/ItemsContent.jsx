import React from 'react';
import { style } from '../util/style';
import Title from './Title';
import Item from './Item';

const ItemsContent = ({ data }) => {
    return (
        <div className={style.container}>
            <div className="flex gap-5 px-3 items-center pb-1 border-slate-950 border-b">
                <div className="text-blue font-semibold">Новинки</div>
                <div className="">Популярние</div>
                <div className="bg-blue p-2">Редактировать</div>
            </div>

            <span className='block text-slate-600 text-sm my-7'>Последние поступления</span>
            <div className="flex justify-between">

                <Title title="Новые рисунки " />

                <div>
                    <label htmlFor="filter" className='text-slate-600 me-3'>Сортировать:</label>
                    <select id="filter" className='border rounded-2xl p-2 border-slate-700'>
                        <option value="1">Цена повозрастанию</option>
                        <option value="2">Цена убыванию</option>
                    </select>
                </div>

            </div>
            <div className="items-wrap w-full">
                <div className="items grid grid-cols-3 gap-16 container mx-auto mt-12 px-16 w-full">
                    {
                        data.map(item => <Item key={item.id} item={item} />)
                    }
                </div>
                <button className='py-2 px-3 border border-slate-800 rounded-lg bg-blue hover:bg-opacity-70 transition-all mt-12 mx-auto block font-semibold'>Показать Больше</button>
            </div>
        </div>
    )
}

export default ItemsContent