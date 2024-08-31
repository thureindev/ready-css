<script setup>
import HeadBanner from './customized/HeadBanner.vue';
import Head1 from './customized/Head1.vue';
import Head2 from './customized/Head2.vue';
import Anchor from './customized/Anchor.vue';
import InternalAnchor from './customized/InternalAnchor.vue';
import Paragraph from './customized/Paragraph.vue';
import DivCentered from './customized/DivCentered.vue';
import ContactItemList from './contact/ContactItemList.vue';
</script>

<template>
    <HeadBanner>
        <Anchor url="https://thureindev.github.io/" newtab>
            thureindev
        </Anchor>
    </HeadBanner>


    <DivCentered>
        <Head1>About This Site</Head1>
        <Paragraph>
            Welcome to my collection of ready-made HTML and CSS components! This site is a casual and straightforward
            resource for anyone looking to quickly prototype or build web projects without getting bogged down in esign.
            Feel free to take whatever you need—everything here is open source or under MIT licenses. I made this site
            to save time and keep things simple, so you can focus on what matters most: development.
        </Paragraph>

        <Paragraph>
            Check out my 
            <Anchor url="https://thureindev.github.io/dashboard-vite-vue-tailwind" newtab>
                Dashboard Template
            </Anchor>
            for building a quick frontend skeleton.
        </Paragraph>

        <Head2>About Dev</Head2>
        <Paragraph>
            Hi, I'm ThuRein, you can call me Tom. I created this site to sharpen my front-end development skills.
            Inspired by various designs I've come across, I built this project to make prototyping easier for myself and
            others. It's all about cutting down the time spent tweaking design elements so we can focus on logic and
            algorithms.
        </Paragraph>

        <Head2>Get in touch!</Head2>
        <Paragraph>
            Have questions, suggestions, or need custom components? Feel free to reach out! I'm always open to feedback
            and collaboration.
        </Paragraph>

        <ContactItemList />
    </DivCentered>
</template>