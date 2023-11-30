const themeData = {
  background: 'red'
};

const ThemeContext = React.createContext(themeData);
const ElButton = (props) => {
  console.log(props)
	const context = useContext(ThemeContext)
  return (
    <button style={{'background': context.background}}>
      {props.children}
    </button>
  );
};

const SignPage = () => {
  return (
    <div>
      <h1>SignPage</h1>
      <ThemeContext.Provider>
        <div>
          <ElButton>Click</ElButton>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};
const container = document.getElementById('root');
createRoot(SignPage, container);

