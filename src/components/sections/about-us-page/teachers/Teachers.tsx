import { TeacherItem } from "@/components/sections/about-us-page/teachers/item/TeacherItem";
import { teacherItems } from "@/data/Teachers";
import { memo } from "react";
import "./Teachers.scss";

export const Teachers = memo(() => {
  return (
    <section className="teachers">
      <div className="teachers__wrapper wrapper-second">
        <h2 className="teachers__title">
          The <span className="text--red">Heartbeat</span> of SwingSync
        </h2>

        <div className="teachers__items">
          {teacherItems.map((item, index) => (
            <TeacherItem
              key={index}
              imageURL={item.imageURL}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
