import React, { useEffect, useRef } from 'react';

const TableauDashboardMobile: React.FC = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vizUrl = "https://public.tableau.com/views/sofia_2/Dashboard1?:language=es-ES&publish=yes&:sid=&:redirect=a";

    const options = {
      hideTabs: true,
      onFirstInteractive: function () {
        console.log("Tableau dashboard is interactive");
      }
    };

    let viz: any;

    if (vizRef.current) {
      viz = new (window as any).tableau.Viz(vizRef.current, vizUrl, options);
    }

    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, []);

  return (
    <div ref={vizRef} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}></div>
  )

};

export default TableauDashboardMobile;
