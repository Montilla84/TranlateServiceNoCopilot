// src/types/declarations.d.ts o src/declarations.d.ts
declare module "*.json" {
    const value: any;
    export default value;
  }

  declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
  }
  