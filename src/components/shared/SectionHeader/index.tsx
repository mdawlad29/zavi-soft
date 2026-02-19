import { Button, Typography } from "antd";

export const SectionHeader = ({
  title,
  btnText,
}: {
  title: string;
  btnText?: string;
}) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1
        className="block text-[24px] font-semibold uppercase leading-[95%] text-secondary md:text-[48px] lg:text-[74px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {btnText && (
        <Button type="primary" className="h-12 px-4 md:px-8">
          {btnText}
        </Button>
      )}
    </div>
  );
};
