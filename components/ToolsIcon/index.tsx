import { FC } from 'react';
import {
  AndroidStudio,
  Ansible,
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
  Python,
  React,
  Redux,
  Rundeck,
  Terraform,
  TypeScript,
  XML,
} from '../SVG';
import { tools } from '../../enums/tools.enum';

interface ToolsSVG {
  name: string;
}

export const ToolsIcon: FC<ToolsSVG> = ({ name }) => {
  const logoToRender = () => {
    switch (name) {
      case tools.HTML:
        return <HTML />;
      case tools.CSS:
        return <CSS />;
      case tools.JavaScript:
        return <JavaScript />;
      case tools.TypeScript:
        return <TypeScript />;
      case tools.React:
        return <React />;
      case tools.NextJS:
        return <NextJS />;
      case tools.Redux:
        return <Redux />;
      case tools.NodeJS:
        return <NodeJS />;
      case tools.ExpressJS:
        return <ExpressJS />;
      case tools.MongoDB:
        return <MongoDB />;
      case tools.Firebase:
        return <Firebase />;
      case tools.Docker:
        return <Docker />;

      // android tools
      case tools.Java:
        return <Java />;
      case tools.XML:
        return <XML />;
      case tools.AndroidStudio:
        return <AndroidStudio />;

      // devops tools
      case tools.Python:
        return <Python />;
      case tools.Rundeck:
        return <Rundeck />;
      case tools.Ansible:
        return <Ansible />;
      case tools.Terraform:
        return <Terraform />;
    }
  };

  return <>{logoToRender()}</>;
};
