import { ref, SetupContext } from 'vue'

export function uploadState(ctx: SetupContext) {
  const imageUrl = ref('data:image/jpeg;base64,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')
  const tempUrl = ref('')
  const confirmAvatarVisible = ref(false)
  const handleAvatarSuccess = (...args: any[]) => {
    console.log('handleAvatarSuccess', args)
  }
  const beforeAvatarUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = function(ev){
      tempUrl.value = ev!.target!.result as string
      console.log(tempUrl.value)
      confirmAvatarVisible.value = true
    }
    reader.readAsDataURL(file)
  }
  const handleConfirmClose = () => {
    confirmAvatarVisible.value = false
  }
  const confirmAvatar = () => {
    imageUrl.value = tempUrl.value
    confirmAvatarVisible.value = false
  }
  return {
    imageUrl,
    tempUrl,
    confirmAvatarVisible,
    handleAvatarSuccess,
    beforeAvatarUpload,
    handleConfirmClose,
    confirmAvatar
  }
}