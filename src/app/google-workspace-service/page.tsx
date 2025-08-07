import { Metadata } from 'next';
import GoogleWorkspaceService from './GoogleWorkspaceService'

export const metadata: Metadata = {
  title: "Go54 - Google Work Space",
};

const page = () => {

  return <GoogleWorkspaceService />
}

export default page