
const Logout = async (props) => {
  await fetch('/auth/usr-logout');
  props.history.push('/');
  window.location.reload(false);
};

export default Logout;