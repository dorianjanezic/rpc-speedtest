import type { Meta, StoryObj } from '@storybook/react';

import { ProcessRow } from './ProcessRow';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/ProcessRow',
    component: ProcessRow,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        backgrounds: {
            default: 'eden',
            values: [
                {
                    name: 'eden',
                    value: '#181E45'
                }
            ]
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
} satisfies Meta<typeof ProcessRow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Waiting: Story = {
    args: {
        percentage: 0,
        isActive: true,
        numOfFinishedTasks: 0,
        indexOfRow: 0,
        name: "Waiting"
    },
};

export const Started: Story = {
    args: {
        percentage: 0,
        isActive: true,
        numOfFinishedTasks: 0,
        indexOfRow: 0,
        name: "Started"
    },
};

export const InProgress: Story = {
    args: {
        percentage: 30,
        isActive: true,
        numOfFinishedTasks: 1,
        indexOfRow: 1,
        name: "In Progress"
    },
};

export const Completed: Story = {
    args: {
        percentage: 100,
        isActive: false,
        numOfFinishedTasks: 1,
        indexOfRow: 2,
        name: "Completed"
    },
};

export const RecentlyCompleted: Story = {
    args: {
        percentage: 100,
        isActive: false,
        numOfFinishedTasks: 1,
        indexOfRow: 2,
        name: "Recently completed",
        lastCompleted: true
    },
};