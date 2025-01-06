const Certifications = ({ cert_data }) => {
  return (
    <>
      {(cert_data && cert_data.length > 0) && (
        <div className="grid grid-cols-2 gap-4">
          {cert_data.map((cert, i) => {
            const { name, issue_date, logo, url } = cert;
            return (
              <div key={i} className="card bg-base-200 dark:bg-neutral-content dark:text-neutral border-2 border-base-300 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                {logo && (
                  <figure className="px-6 pt-6 h-36">
                    <img src={logo} alt={name} className="max-w-40" loading="lazy" />
                  </figure>
                )}
                <div className="card-body items-center text-center p-6">
                  {name && (<h2 className="card-title text-lg">{name}</h2>)}
                  {issue_date  && (
                    <div className="issue-date">
                      <span className="text-sm font-bold">Issued: </span>
                      <span>{issue_date}</span>
                    </div>
                  )}
                  {url && (
                    <div className="card-actions">
                      <a href={url} className="link link-secondary">View Cert</a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  );
};

export default Certifications;

