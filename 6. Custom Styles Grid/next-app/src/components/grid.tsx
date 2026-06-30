import { cn } from "@/lib/utils";
import { IconBrain, IconCursorText, IconRoute } from "@tabler/icons-react";
import React, { ReactNode } from "react";

const MainSkeleton = () => {
  const chat = [
    {
      role: "user",
      text: "hello there",
    },
    {
      role: "assistant",
      text: "hello there! How can I help you today?",
    },
    {
      role: "user",
      text: "I want to create a new workflow",
    },
    {
      role: "assistant",
      text: "Sure, I can help you with that. What would you like to build?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex ml-auto justify-end gap-2 items-start bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg p-2">
        <p className="text-sm text-white">{text}</p>
        <div className="size-4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex justify-start gap-2 items-start bg-white rounded-tr-full rounded-tl-full rounded-bl-lg rounded-br-full w-fit p-2 mr-auto">
        <div className="rounded-full size-4 bg-gradient-to-r from-green-500 to-emerald-500"></div>
        <p className="text-sm text-black">{text}</p>
      </div>
    );
  };
  return (
    <div className="h-full w-full px-12 flex flex-col gap-4">
      {chat.map((message, index) => {
        return message.role === "user" ? (
          <UserMessage text={message.text} />
        ) : (
          <AIMessage text={message.text} />
        );
      })}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="max-w-5xl mx-auto border-x border-neutral-200 bg-gray-200 min-h-screen py-20">
      <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200">
        <Card>
          <CardHeader>
            <IconBrain />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            <IconCursorText />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Preview and debug workflow logic in a safe sandbox before deploying,
            helping you iterate with confidence.
          </CardDescription>
          <CardSkeleton className="bg-white">
            <MainSkeleton />
          </CardSkeleton>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <IconRoute />
            <CardTitle>Native Tools Integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("bg-white p-4", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("font-medium text-lg tracking-tight", className)}>
      {children}
    </h2>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const CardSkeleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-60 w-full bg-gray-50 my-4",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "mask-radial-from-40%",
        className,
      )}
    >
      {children}
    </div>
  );
};
