import dynamic from 'next/dynamic';

const processDirectory = {
    HelloWorld: {
        component: dynamic(() => import('@/components/apps/HelloWorld')),
        props: {
            title: 'Hello, World!',
            description: 'This is a simple example of a dynamic component in Next.js.'
        }
    }
};

export default processDirectory;