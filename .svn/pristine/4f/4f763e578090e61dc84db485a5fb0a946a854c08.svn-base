let code = {}

code.base = `
    <FormInput v-model="input1" placeholder="无限制，双向绑定输入"></FormInput>
    <FormInput v-model="input1" placeholder="设置固定宽度" :width="500"></FormInput>
    <FormInput v-model="input1" placeholder="最多输入10个字符" :width="300" :maxlength=10></FormInput>
    <FormInput v-model="input1" placeholder="只读" :width="300" readonly></FormInput>
`

code.type = `
    <FormInput v-model="input2.value" placeholder="这是个最普通的文本域" type="textarea"></FormInput>
    <FormInput v-model="input2.value" placeholder="设置了固定成长度的文本域" type="textarea" :width="500"></FormInput>
    <FormInput v-model="input2.value" placeholder="固定高度为5行的文本域" type="textarea" :width="300" :rows=5></FormInput>
    <FormInput v-model="input2.value" placeholder="根据内容自动扩展高度的文本域" type="textarea" :width="300" autosize></FormInput>
    <FormInput v-model="input2.value" placeholder="设置最小和最大行数的文本域" type="textarea" :width="300" :autosize="{minRows: 2, maxRows: 6}"></FormInput>
`

code.disabled = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300" disabled></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" type="textarea" :width="300" disabled></FormInput>
`

code.clear = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable></FormInput>
`
code.icon = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable pre-icon="search"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable>
        <span slot="preIcon" class="custom-search">
            <Icon slot="preIcon" type="search"></Icon>
        </span>
    </FormInput>
    <FormInput v-model="input1" placeholder="请输入" :width="300" :aft-icon="'eye-disabled'"></FormInput>
    <FormInput v-model="input1" placeholder="请输入" :width="300"  clearable>
        <span slot="aftIcon" class="custom-search">
            <Icon slot="aftIcon" type="eye-disabled"></Icon>
        </span>
    </FormInput>
    <FormInput v-model="input1" placeholder="请输入" :width="300" aft-icon="search"></FormInput>
    <FormInput v-model="input1" placeholder="请输入" :width="300" clear-icon="eye-disabled" clearable></FormInput>
`

code.size = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="large"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="small"></FormInput>
`
code.fix =  `
    <FormInput v-model="input1.value" placeholder="请输入">
        <span slot="prepend" class="custom-pre">http://</span>
        <span slot="append" class="custom-append">.com</span>
    </FormInput>
`

export default code
