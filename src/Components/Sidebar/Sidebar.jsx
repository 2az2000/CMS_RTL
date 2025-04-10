import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <NavLink className='links' to="/">
            <AiOutlineHome className="icon" />
            صفحه اصلی
        </NavLink>
        <NavLink className='links' to="/products">
            <MdProductionQuantityLimits className="icon" />
            محصولات
        </NavLink>
        <NavLink className='links' to="/comments">
            <BiCommentDetail className="icon" />
            کامنت ها
        </NavLink>
        <NavLink className='links' to="/users">
            <FiUsers className="icon" />
            کاربران
        </NavLink>
        <NavLink className='links' to="/orders">
              <BsBagCheck className="icon" />
              سفارشات
        </NavLink>
        <NavLink className='links' to="/offs">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}
