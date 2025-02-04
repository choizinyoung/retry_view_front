import React, {useState} from 'react';

function Category(props) {
    /**카테고리  */
    const items = [
        { title: '전자제품 1', children: ['냉장고', '인덕션'] },
        { title: '전자제품 2', children: ['세탁기', '청소기'] },
        { title: '전자제품 3', children: ['TV', '오디오'] },
      ];
    

    const [isOpen, setIsOpen] = useState(false);

    const toggleChildren = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className='common_wrapper category_wrapper'>
            <button type='button' className='category_btn out_btn'>카테고리 설정</button>
            <div className="tree">
                <ul>
                    <li>
                        전자제품
                        <ul>
                            <li>냉장고</li>
                            <li>인덕션</li>
                        </ul>
                    </li>
                    <li>
                        가전용품
                        <ul>
                            <li>냉장고</li>
                            <li>인덕션</li>
                        </ul>
                    </li>
                    <li>
                        액세사리
                        <ul>
                            <li>냉장고</li>
                            <li>인덕션</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Category;