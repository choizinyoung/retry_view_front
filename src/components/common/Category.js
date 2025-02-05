import React, { useState } from 'react';

function Category(props) {
    /**카테고리  */
    const items = [
        { title: '전체보기', children: null },
        { title: '전자제품 1', children: ['냉장고', '인덕션'] },
        { title: '전자제품 2', children: ['세탁기', '청소기'] },
        { title: '전자제품 3', children: ['TV', '오디오'] },
    ];
    const [openItems, setOpenItems] = useState({});

    const toggleChildren = (index) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    return (
        <div className='common_wrapper category_wrapper'>
            <button type='button' className='category_btn out_btn'>카테고리 설정</button>
            <div className="tree">
                <ul>
                    {items.map((item, index) => (
                        <li key={index} onClick={() => toggleChildren(index)} className={item.children ? 'has_child' : ''}>
                            {item.title}
                            {openItems[index] && item.children && (
                                <ul className={`subtree ${openItems[index] ? 'open' : ''}`}>
                                    {item.children.map((child, childIndex) => (
                                        <li key={childIndex}>{child}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;