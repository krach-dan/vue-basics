import {onMounted, onUnmounted, ref} from "vue";

export default function useMouse() {
    
    const x = ref(0)
    const y = ref(0)
    
    function updatePositions(event) {
         x.value = event.pageX
         y.value = event.pageY
    }
    
    onMounted(() => window.addEventListener('mousemove', updatePositions));
    onUnmounted(() => window.removeEventListener('mousemove', updatePositions));
    
    return { x, y }
}