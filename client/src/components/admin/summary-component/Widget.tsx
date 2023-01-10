const Widget = (data: any) => {
  const info: any = data.data;

  return (
    <div className="d-flex align-items-center">
      <div className={"widget-icon-" + info.position}>{info.icon}</div>
      <div className="widget-text">
        <h3>
          {info.isMoney
            ? "$" + info.digits?.toLocaleString()
            : info.digits?.toLocaleString()}
        </h3>
        <p>{info.title}</p>
      </div>
      {info.percentage < 0 ? (
        <>
          <div className="percentage-summary-negative">
            {Math.floor(info.percentage) + "%"}
          </div>
        </>
      ) : (
        <>
          <div className="percentage-summary-positive">
            {Math.floor(info.percentage) + "%"}
          </div>
        </>
      )}
    </div>
  );
};

export default Widget;
