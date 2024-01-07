import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './Sidebar.css';
import { ShoppingCart } from 'phosphor-react';

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <ShoppingCart size={32} />
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
