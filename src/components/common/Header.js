import React, { useState } from "react";

function Header(props) {
  const [loginTest, setLoginTest] = useState(false); //login 연동 전 퍼블리싱용 임시 로그인 유무 체크

  return (
    <div id="header">
      <div className="hd_inner">
        <h1>RetryView</h1>
        <div id="hd_btns">
            <div className="hd_link">
              <a className="icon login">로그인</a>
            </div>
            <div className="hd_link">
              <a className="background">회원가입</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
