<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: "Banner",
    props: {
        type: String,
    },
})
</script>

<template>
    <div :class="[$style.wrapper, $style[type]]">
        <Icon
            :name="
                (type == 'warning' && 'help') ||
                    (type == 'success' && 'checkcircle') ||
                    (type == 'error' && 'close') ||
                    (type == 'info' && 'help')
            "
            size="14"
        />

        <span><slot /></span>
    </div>
</template>

<style module>
.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 0 14px;

    min-height: 40px;
    border-radius: 8px;
}

.wrapper span {
    font-size: 12px;
    line-height: 1.6;
    font-weight: 600;
}

.wrapper.info {
    fill: var(--text-secondary);
    color: var(--text-secondary);
    background: var(--opacity-10);
}

.wrapper.warning {
    fill: var(--orange);
    color: var(--orange);
    background: rgba(239, 132, 86, 0.15);
}

.wrapper.success {
    fill: var(--green);
    color: var(--green);
    background: rgba(26, 161, 104, 0.15);
}

.wrapper.error {
    fill: var(--red);
    color: var(--red);
}
</style>
