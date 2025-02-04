import React from 'react';

function Profile(props) {
    const nickname = '최진영'
    const login = true;

    return (
        login ? (
        <div className='profile_wrapper common_wrapper'>
            <div className='main_profile'>
                <div className='img_wrapper'>
                    <img src="/assets/img/dummy_profile.png" alt="" />
                </div>
                <div className='nickname'>{nickname}</div>
            </div>
            <div className='profile_btn'>
                <button type='button' className='lg_btn'>MY PAGE</button>
                <button type='button' className='out_btn'>로그아웃</button>
            </div>
        </div>
        ) : (
        <div className='profile_wrapper common_wrapper'>
            <div className='main_profile'>
                <div className='nickname'>더 안전하고 편리하게 <br />이용해보세요.</div>
            </div>
            <div className='profile_btn'>
                <button type='button' className='lg_btn'>LOGIN</button>
                <button type='button' className='out_btn'>회원가입</button>
            </div>
        </div>
        )
    );
}

export default Profile;