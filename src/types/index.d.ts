type TMenuItemProps = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
}



export { TMenuItemProps, TActiveLinkProps };
