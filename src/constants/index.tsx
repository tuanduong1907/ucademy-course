import { IconComment, IconExplore, IconOrder, IconPlay, IconStudy, IconUsers } from "@/icons";
import { TMenuItemProps } from "@/types";

export const menuItem: TMenuItemProps[] =
  [
      {
        url: "/",
        title: "Khám phá",
        icon: <IconPlay className="size-5" />,
      },
      {
        url: "/explore",
        title: "Khu vực học tập",
        icon: <IconStudy className="size-5" />,
      },
      {
        url: "/manage/course",
        title: "Quản lý khóa học",
        icon: <IconExplore className="size-5" />,
      },
      {
        url: "/manage/member",
        title: "Quản lý thành viên",
        icon: <IconUsers className="size-5" />,
      },
      {
        url: "/manage/order",
        title: "Quản lý đơn hàng",
        icon: <IconOrder className="size-5" />,
      },
      {
        url: "/manage/comment",
        title: "Quản lý bình luận",
        icon: <IconComment className="size-5" />,
      },
  ];
