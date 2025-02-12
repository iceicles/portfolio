import { FC } from 'react';
import {
  AndroidStudio,
  Ansible,
  Cloudinary,
  CSS,
  Docker,
  ExpressJS,
  Firebase,
  HTML,
  Java,
  JavaScript,
  MongoDB,
  NextJS,
  NodeJS,
  Puppeteer,
  Python,
  ReactSVG,
  Redux,
  Rundeck,
  Tailwind,
  Terraform,
  TypeScript,
  XML,
} from '../SVG';
import { tools } from '../../enums/tools.enum';

interface ToolsSVG {
  name: string;
  className?: string;
  HTMLStyle?: string;
  CSSStyle?: string;
  TWStyle?: string;
  JSStyle?: string;
  TSStyle?: string;
  ReactStyle?: string;
  NextJSStyle?: string;
  ReduxStyle?: string;
  NodeJSStyle?: string;
  ExpressJSStyle?: string;
  MongoDBStyle?: string;
  FireBaseStyle?: string;
  DockerStyle?: string;
  CloudinaryStyle?: string;
  PuppeteerStyle?: string;
  JavaStyle?: string;
  XMLStyle?: string;
  AndroidStudioStyle?: string;
  PythonStyle?: string;
  RundeckStyle?: string;
  AnsibleStyle?: string;
  TerraformStyle?: string;
}

// TODO: extract return JSX into resuable component

export const ToolsIcon: FC<ToolsSVG> = ({
  name,
  className,
  HTMLStyle,
  CSSStyle,
  TWStyle,
  JSStyle,
  TSStyle,
  ReactStyle,
  NextJSStyle,
  ReduxStyle,
  NodeJSStyle,
  ExpressJSStyle,
  MongoDBStyle,
  FireBaseStyle,
  DockerStyle,
  CloudinaryStyle,
  PuppeteerStyle,
  JavaStyle,
  XMLStyle,
  AndroidStudioStyle,
  PythonStyle,
  RundeckStyle,
  AnsibleStyle,
  TerraformStyle,
}) => {
  const logoToRender = () => {
    switch (name) {
      case tools.HTML:
        return (
          <>
            <div className='relative group'>
              <HTML className={HTMLStyle ? HTMLStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                HTML
              </span>
            </div>
          </>
        );
      case tools.CSS:
        return (
          <>
            <div className='relative group'>
              <CSS className={CSSStyle ? CSSStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                CSS
              </span>
            </div>
          </>
        );
      case tools.Tailwind:
        return (
          <>
            <div className='relative group'>
              <Tailwind className={TWStyle ? TWStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] left-[-1rem] bg-gray-800'>
                Tailwind
              </span>
            </div>
          </>
        );
      case tools.JavaScript:
        return (
          <>
            <div className='relative group'>
              <JavaScript className={JSStyle ? JSStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                JavaScript
              </span>
            </div>
          </>
        );
      case tools.TypeScript:
        return (
          <>
            <div className='relative group'>
              <TypeScript className={TSStyle ? TSStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                TypeScript
              </span>
            </div>
          </>
        );
      case tools.React:
        return (
          <>
            <div className='relative group'>
              <ReactSVG className={ReactStyle ? ReactStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                React
              </span>
            </div>
          </>
        );
      case tools.NextJS:
        return (
          <>
            <div className='relative group'>
              <NextJS className={NextJSStyle ? NextJSStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                NextJS
              </span>
            </div>
          </>
        );
      case tools.Redux:
        return <Redux className={ReduxStyle ? ReduxStyle : className} />;
      case tools.NodeJS:
        return (
          <>
            <div className='relative group'>
              <NodeJS className={NodeJSStyle ? NodeJSStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                NodeJS
              </span>
            </div>
          </>
        );
      case tools.ExpressJS:
        return (
          <>
            <div className='relative group'>
              <ExpressJS
                className={ExpressJSStyle ? ExpressJSStyle : className}
              />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                ExpressJS
              </span>
            </div>
          </>
        );
      case tools.MongoDB:
        return (
          <>
            <div className='relative group'>
              <MongoDB className={MongoDBStyle ? MongoDBStyle : className} />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                MongoDB
              </span>
            </div>
          </>
        );
      case tools.Firebase:
        return (
          <Firebase className={FireBaseStyle ? FireBaseStyle : className} />
        );
      case tools.Docker:
        return <Docker className={DockerStyle ? DockerStyle : className} />;
      case tools.Cloudinary:
        return (
          <>
            <div className='relative group'>
              <Cloudinary
                className={CloudinaryStyle ? CloudinaryStyle : className}
              />
              <span className='absolute hidden group-hover:block top-[-10px] bg-gray-800'>
                Cloudinary
              </span>
            </div>
          </>
        );

      case tools.Puppeteer:
        return (
          <Puppeteer className={PuppeteerStyle ? PuppeteerStyle : className} />
        );

      // android tools
      case tools.Java:
        return <Java className={JavaStyle ? JavaStyle : className} />;
      case tools.XML:
        return <XML className={XMLStyle ? XMLStyle : className} />;
      case tools.AndroidStudio:
        return (
          <AndroidStudio
            className={AndroidStudioStyle ? AndroidStudioStyle : className}
          />
        );

      // devops tools
      case tools.Python:
        return <Python className={PythonStyle ? PythonStyle : className} />;
      case tools.Rundeck:
        return <Rundeck className={RundeckStyle ? RundeckStyle : className} />;
      case tools.Ansible:
        return <Ansible className={AnsibleStyle ? AnsibleStyle : className} />;
      case tools.Terraform:
        return (
          <Terraform className={TerraformStyle ? TerraformStyle : className} />
        );
    }
  };

  return <>{logoToRender()}</>;
};
