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
        return <HTML className={HTMLStyle ? HTMLStyle : className} />;
      case tools.CSS:
        return <CSS className={CSSStyle ? CSSStyle : className} />;
      case tools.Tailwind:
        return <Tailwind className={TWStyle ? TWStyle : className} />;
      case tools.JavaScript:
        return <JavaScript className={JSStyle ? JSStyle : className} />;
      case tools.TypeScript:
        return <TypeScript className={TSStyle ? TSStyle : className} />;
      case tools.React:
        return <ReactSVG className={ReactStyle ? ReactStyle : className} />;
      case tools.NextJS:
        return <NextJS className={NextJSStyle ? NextJSStyle : className} />;
      case tools.Redux:
        return <Redux className={ReduxStyle ? ReduxStyle : className} />;
      case tools.NodeJS:
        return <NodeJS className={NodeJSStyle ? NodeJSStyle : className} />;
      case tools.ExpressJS:
        return (
          <ExpressJS className={ExpressJSStyle ? ExpressJSStyle : className} />
        );
      case tools.MongoDB:
        return <MongoDB className={MongoDBStyle ? MongoDBStyle : className} />;
      case tools.Firebase:
        return (
          <Firebase className={FireBaseStyle ? FireBaseStyle : className} />
        );
      case tools.Docker:
        return <Docker className={DockerStyle ? DockerStyle : className} />;
      case tools.Cloudinary:
        return (
          <Cloudinary
            className={CloudinaryStyle ? CloudinaryStyle : className}
          />
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
