import {
  Admin,
  Resource,
  // ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import AppsIcon from '@mui/icons-material/Apps';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SchemaIcon from '@mui/icons-material/Schema';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import dataProvider from "@/data/clicheApiProvider";
import i18nProvider from "@/i18n/inMemoryProvider";

import AppList from "./components/AppList";
import BuilderList from "@/components/BuilderList";
import BuildTargetList from "@/components/BuildTargetList";
import ModelFieldTypeList from "@/components/ModelFieldTypeList";
import ModelList from "@/components/ModelList";
import SchemaFieldTypeList from "@/components/SchemaFieldTypeList";
import SchemaList from "@/components/SchemaList"
import ScriptList from "@/components/ScriptList"
import ViewList from "@/components/ViewList";
import ViewMethodList from "@/components/ViewMethodList";

export const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      name="builders.targets"
      list={BuildTargetList}
      show={ShowGuesser}
      icon={IntegrationInstructionsIcon}
      options={{ label: 'Build Targets' }}
    />
    <Resource
      name="builders"
      list={BuilderList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={BuildIcon}
      options={{ label: 'Builders' }}
    />
    <Resource
      name="scripts"
      list={ScriptList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={CodeIcon}
      options={{ label: 'Scripts' }}
    />
    <Resource
      name="apps"
      list={AppList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={AppsIcon}
      options={{ label: 'Apps' }}
    />
    <Resource
      name="models.fields.types"
      list={ModelFieldTypeList}
      show={ShowGuesser}
      icon={DataUsageIcon}
      options={{ label: 'Model Field Types' }}
    />
    <Resource
      name="models"
      list={ModelList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={DataUsageIcon}
      options={{ label: 'Models' }}
    />
    <Resource
      name="schemas.fields.types"
      list={SchemaFieldTypeList}
      show={ShowGuesser}
      icon={SchemaIcon}
      options={{ label: 'Schema Field Types' }}
    />
    <Resource
      name="schemas"
      list={SchemaList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={SchemaIcon}
      options={{ label: 'Schemas' }}
    />
    <Resource
      name="views"
      list={ViewList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={ViewModuleIcon}
      options={{ label: 'Views' }}
    />
    <Resource
      name="views.methods"
      list={ViewMethodList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={ViewModuleIcon}
      options={{ label: 'View Methods' }}
    />
  </Admin>
);
