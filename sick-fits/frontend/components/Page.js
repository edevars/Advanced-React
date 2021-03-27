import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <>
    <h1>Hey! I'm the page component</h1>
    {children}
  </>
);

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
