<!-- Card -->
<div class="w-full flex-1">
  <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
    <div class="bg-white p-6 flex flex-col justify-between">
      <div class="px-10">
        <div class="block mt-2">
          <slot name="text" />
        </div>
      </div>
    </div>

    <div class="rounded-b-lg mt-4">
      <slot name="image" />
    </div>
  </div>
</div>
