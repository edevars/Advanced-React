import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <>
    <Header />
    <h1>Hey! I'm the page component</h1>
    {children}
  </>
);

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
