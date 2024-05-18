import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <span className={style.loader} />
    </div>
  );
};

export default Loader;
